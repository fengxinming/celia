'use strict';

const { resolve, resolveDist } = require('../utils');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      file: output,
      format: 'amd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = configure(resolve('src/index.js'), resolveDist('amd.js'));
