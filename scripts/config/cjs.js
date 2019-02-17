'use strict';

const { resolve, DIST_FILENAME } = require('./_util');

function configure(input, output) {
  return {
    inputOptions: {
      input: resolve(input)
    },
    outputOptions: {
      file: resolve(output),
      format: 'cjs',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure('src/index.js', `dist/${DIST_FILENAME}.common.js`)
];
