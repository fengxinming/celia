'use strict';

const { relative, join } = require('path');
const { writeFile, readdirSync } = require('fs');
const zlib = require('zlib');
const { promisify } = require('util');
const rollup = require('rollup');
const replace = require('@rollup/plugin-replace');
const alias = require('@rollup/plugin-alias');
const combine = require('rollup-plugin-combine');
const buble = require('@rollup/plugin-buble');
const nodeResolve = require('@rollup/plugin-node-resolve');
const cjs = require('@rollup/plugin-commonjs');
const { minify } = require('terser');
const { getLogger } = require('clrsole');
const { resolve } = require('./utils');
const {
  version,
  name: packageName
} = require('../package.json');

const logger = getLogger('build');

const banner = `/*
 * ${packageName}.js v${version}
 * (c) 2018-${new Date().getFullYear()} Jesse Feng
 * Released under the MIT License.
 */`;

const gzip = promisify(zlib.gzip);

function genConfig(name, opts) {
  const {
    inputOptions,
    outputOptions,
    aliases,
    replaceAll
  } = opts;
  inputOptions.plugins = [
    replace(Object.assign({
      __VERSION__: version
    }, replaceAll)),
    alias({
      entries: Object.assign({
        '@': resolve('./')
      }, aliases)
    }),
    combine({
      include: /src\/index.js$/,
      exports: 'named'
    }),
    buble(),
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext'],
      browser: true
    }),
    cjs()
  ].concat(inputOptions.plugins || []);

  outputOptions.banner = banner;
  outputOptions.freeze = false;
  // outputOptions.exports = 'named';
  if (!outputOptions.name) {
    outputOptions.name = name;
  }

  Object.defineProperty(opts, '_name', {
    enumerable: false,
    value: name
  });

  return opts;
};

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

async function print(file, code, isProd) {
  const zipped = await gzip(code);
  const extra = isProd ? `(gzipped: ${getSize(zipped)})` : '';
  logger.info(relative(process.cwd(), file), getSize(code), extra || '');
}

async function write(file, code, isProd) {
  await print(file, code, isProd);
  if (isProd) {
    file = file.replace('.js', '.min.js');
    code = minify(code, {
      toplevel: true,
      output: {
        ascii_only: true,
        preamble: banner
      },
      compress: {
        pure_funcs: []
      }
    }).code;
    writeFile(file, code, (err) => {
      if (err) {
        throw err;
      }
      print(file, code, isProd);
    });
  }
}

async function pack(config) {
  const {
    inputOptions,
    outputOptions,
    isProd = false
  } = config;

  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.write(outputOptions);

  const {
    file,
    dir
  } = outputOptions;

  if (!dir) {
    write(file, output[0].code, isProd);
  } else {
    output.forEach(({ code, fileName }) => {
      write(join(dir, fileName), code, isProd);
    });
  }
}

function getAllBuilds() {
  let mods = [];
  readdirSync(join(__dirname, 'config'))
    .forEach((key) => {
      key = key.replace(/\.js$/, '');
      const conf = require(`./config/${key}`);
      if (Array.isArray(conf)) {
        mods = mods.concat(conf.map(config => genConfig(key, config)));
      } else {
        mods = mods.concat(genConfig(key, conf));
      }
    });
  return mods;
};

async function build(name) {
  let builds = getAllBuilds();
  if (Array.isArray(name)) {
    builds = name.length
      ? builds.filter((b) => {
        return name.some(f => b._name.indexOf(f) > -1);
      })
      : builds;
  } else if (typeof name === 'string') {
    builds = builds.filter((b) => {
      return b._name.indexOf(name) > -1;
    });
  }
  const total = builds.length;
  for (let i = 0; i < total; i++) {
    try {
      await pack(builds[i]);
    } catch (e) {
      logger.error(e);
      break;
    }
  }
}

module.exports = build;
