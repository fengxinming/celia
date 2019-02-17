'use strict';

const { matches } = require('corie-utils');
const { resolve } = require('./_util');

function configure(input, output) {
  return {
    inputOptions: {
      input: matches(resolve(input))
    },
    outputOptions: {
      dir: resolve(output),
      format: 'cjs',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure('src/*.js', 'dist'),
  configure('src/date/*.js', 'dist/date'),
  configure('src/array/*.js', 'dist/array')
];
