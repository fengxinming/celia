'use strict';

const { promisify } = require('util');
const { existsSync, mkdirSync } = require('fs');
const { copy } = require('fs-extra');
const { resolve, dist, resolveDist } = require('./utils');

const copify = promisify(copy);

module.exports = () => {
  if (!existsSync(dist)) {
    mkdirSync(dist);
  }
  return Promise.all([
    copify(resolve('package.json'), resolveDist('package.json')),
    copify(resolve('README.md'), resolveDist('README.md'))
    // copify(resolve('src'), releaseDir('es'))
  ]);
};
