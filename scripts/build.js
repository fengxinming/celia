'use strict';

const path = require('path');
const fs = require('fs');
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
  rimraf.sync(path.join(process.cwd(), 'dist/**'));
  rimraf.sync(path.join(process.cwd(), 'legacy/**'));
  const total = builds.length;
  for (let i = 0; i < total; i++) {
    try {
      await buildSrc(builds[i]);
    } catch (e) {
      logError(e);
      break;
    }
  }
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  fs.copyFileSync(
    path.join(__dirname, '..', 'package.json'),
    path.join(__dirname, '..', 'dist', 'package.json')
  );
}

build(builds);

async function print(file, code, isProd) {
  const zipped = await gzip(code);
  const extra = isProd ? ` (gzipped: ${getSize(zipped)})` : '';
  console.log(chalk.green('%s %s%s'), path.relative(process.cwd(), file), getSize(code), extra || '');
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function logError(e) {
  console.log(chalk.red(e));
}
