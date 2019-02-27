'use strict';

const { matches } = require('corie-utils');
const { resolve, sourceDir } = require('./_util');

function configure(input, output) {
  return {
    compress: true,
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
  configure('src/*.js', 'dist')
].concat(sourceDir.map(dirname => configure(`src/${dirname}/*.js`, `dist/${dirname}`)));
