'use strict';

const { resolve, DIST_FILENAME } = require('./_util');

function configure() {
  return {
    inputOptions: {
      input: resolve('src/index.js')
    },
    outputOptions: {
      file: resolve(`dist/${DIST_FILENAME}.esm.js`),
      format: 'es'
    }
  };
}

module.exports = [
  configure()
];
