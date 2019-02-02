'use strict';

const path = require('path');
const chalk = require('chalk');
const rollup = require('rollup');
const build = require('./config').getBuild('celia-cjs');

const currentPath = process.cwd();
const watchOptions = {
  ...build.inputOptions,
  output: [build.outputOptions]
};
const watcher = rollup.watch(watchOptions);

watcher.on('event', (evt) => {
  // evt.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error

  const {
    code,
    input,
    output
  } = evt;
  switch (code) {
    case 'START':
      console.log(chalk.yellow(`开始监听 ...`));
      break;
    case 'BUNDLE_START':
      console.log(chalk.yellow(`开始打包 ${path.relative(currentPath, input)} ...`));
      break;
    case 'BUNDLE_END':
      console.log(chalk.yellow(`打包完成 ${path.relative(currentPath, output[0])}`));
      break;
    case 'END':
      console.log(chalk.yellow('打包结束 ...'));
      break;
    case 'ERROR':
      console.log(chalk.red('打包异常: %s\n%s'), path.relative(currentPath, input), evt.error);
      break;
    case 'FATAL':
      console.log(chalk.red('未知异常: %s'), evt.error);
      break;
  }
});
