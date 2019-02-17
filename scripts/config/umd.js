'use strict';

const { resolve, DIST_FILENAME } = require('./_util');

function configure(input, output) {
  return {
    isProd: output.lastIndexOf('min.js') > -1,
    inputOptions: {
      input: resolve(input)
    },
    outputOptions: {
      file: resolve(output),
      format: 'umd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure('src/index.js', `dist/${DIST_FILENAME}.js`),
  configure('src/index.js', `dist/${DIST_FILENAME}.min.js`)
];
