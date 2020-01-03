'use strict';

const { resolve, dist, resolveDist } = require('../utils');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'cjs',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolveDist('cjs.js'))
  // configure(apiNames.map(dir => resolve(`src/${dir}.js`)), dist)
];
