'use strict';

const { resolve, sourceDir, DIST_FILENAME } = require('./_util');

function configure(input, output) {
  return {
    compress: true,
    inputOptions: {
      input: resolve(input)
      // experimentalCodeSplitting: true
    },
    outputOptions: {
      dir: resolve(output),
      format: 'cjs',
      legacy: true,
      esModule: false
    }
  };
}

module.exports = [
  configure('src/index.js', `dist/${DIST_FILENAME}.legacy.js`)
].concat(sourceDir.map(dir => configure(`src/${dir}.js`, `dist/${dir}.legacy.js`)));
