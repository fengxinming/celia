'use strict';

const { existsSync, mkdirSync, readdirSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');
const { getConsole } = require('corie-logger');
const logger = getConsole('celia');
const { resolve } = require('./config/_util');

function copyFile(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      logger.error(error);
      throw error;
    }
    stdout && logger.info(stdout);
    stderr && logger.warn(stderr);
  });
}

module.exports = () => {
  const distDir = resolve('npm');
  if (!existsSync(distDir)) {
    mkdirSync(distDir);
  }
  copyFile(`cp ${resolve('package.json')} ${resolve('npm/package.json')}`);
  copyFile(`cp ${resolve('README.md')} ${resolve('npm/README.md')}`);
  const src = resolve('src');
  readdirSync(src).forEach((file) => {
    copyFile(`cp -r ${join(src, file)} ${join(distDir, file)}`);
  });
};
