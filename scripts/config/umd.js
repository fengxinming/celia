'use strict';

const { resolve } = require('../util');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      file: output,
      format: 'umd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/umd.js`))
];
