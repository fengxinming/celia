'use strict';

const { join } = require('path');

function resolve(...args) {
  return join(__dirname, '..', ...args);
}

const dist = resolve('node_modules', '__npm__');

function resolveDist(...args) {
  return join(dist, ...args);
}

module.exports = {
  dist,
  resolve,
  resolveDist
};
