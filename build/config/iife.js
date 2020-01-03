'use strict';

const { resolve, resolveDist } = require('../utils');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      name: 'celia',
      file: output,
      format: 'iife',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = configure(resolve('src/index.js'), resolveDist('iife.js'));
