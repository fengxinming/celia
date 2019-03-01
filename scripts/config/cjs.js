'use strict';

const { matches } = require('corie-utils');
const { resolve, sourceDir, DIST_FILENAME } = require('./_util');

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
  configure('src/index.js', `dist/${DIST_FILENAME}.common.js`)
].concat(sourceDir.map(dir => configure(`src/${dir}.js`, `dist/${dir}.common.js`)));
