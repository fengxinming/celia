'use strict';

const path = require('path');
const util = require('util');
const rollup = require('rollup');
const zlib = require('zlib');
const rimraf = require('rimraf');
const { exec } = require('child_process');
const { getConsole } = require('corie-logger');

let builds = require('./config').getAllBuilds();
const { resolve } = require('./config/_util');

const gzip = util.promisify(zlib.gzip);
const logger = getConsole('celia');

if (process.argv[2]) {
  const filters = process.argv[2].split(',');
  builds = builds.filter((b) => {
    return filters.some(f => b._name.indexOf(f) > -1);
  });
}

async function buildSrc(config) {
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
    await print(file, output[0].code, isProd);
  } else {
    output.forEach(({ code, fileName }) => {
      print(path.join(dir, fileName), code);
    });
  }
}

async function build(builds) {
  rimraf.sync(resolve('dist/**'));
  rimraf.sync(resolve('legacy/**'));
  const total = builds.length;
  for (let i = 0; i < total; i++) {
    try {
      await buildSrc(builds[i]);
    } catch (e) {
      logger.error(e);
      break;
    }
  }
  copyFile(`cp ${resolve('package.json')} ${resolve('dist/package.json')}`);
  copyFile(`cp -r ${resolve('src/')} ${resolve('dist/src/')}`);
}

build(builds);

async function print(file, code, isProd) {
  const zipped = await gzip(code);
  const extra = isProd ? `(gzipped: ${getSize(zipped)})` : '';
  logger.info(path.relative(process.cwd(), file), getSize(code), extra || '');
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function copyFile(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      logger.error(error);
      throw error;
    }
    logger.info(stdout);
    logger.warn(stderr);
  });
}
