'use strict';

const path = require('path');
const util = require('util');
const rollup = require('rollup');
const zlib = require('zlib');
const chalk = require('chalk');
const rimraf = require('rimraf');

const gzip = util.promisify(zlib.gzip);

let builds = require('./config').getAllBuilds();

if (process.argv[2]) {
  const filters = process.argv[2].split(',');
  builds = builds.filter((b) => {
    return filters.some(f => b._name.indexOf(f) > -1);
  });
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function logError(e) {
  console.log(chalk.red(e));
}

async function buildSrc(config) {
  const {
    inputOptions,
    outputOptions,
    isProd = false
  } = config;
  const bundle = await rollup.rollup(inputOptions);
  const {
    code,
    output
  } = await bundle.write(outputOptions);
  const {
    file,
    dir
  } = outputOptions;

  const print = async (file, code) => {
    const zipped = await gzip(code);
    const extra = isProd ? ` (gzipped: ${getSize(zipped)})` : '';
    console.log(chalk.green('%s %s%s'), path.relative(process.cwd(), file), getSize(code), extra || '');
  };

  if (code) {
    await print(file, code);
  } else if (Array.isArray(output)) {
    output.forEach((f) => {
      print(path.join(dir, f.fileName), f.code);
    });
  } else if (typeof output === 'object') {
    Object.keys(output).forEach((f) => {
      print(path.join(dir, f), output[f].code);
    });
  }

}

async function build(builds) {
  rimraf.sync(path.join(process.cwd(), 'dist/**'));
  const total = builds.length;
  for (let i = 0; i < total; i++) {
    try {
      await buildSrc(builds[i]);
    } catch (e) {
      logError(e);
      break;
    }
  }
}

build(builds);
