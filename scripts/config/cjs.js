'use strict';

const { resolve, apiNames } = require('../util');

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
  configure(resolve('src/index.js'), resolve(`npm/cjs.js`)),
  configure(apiNames.map(dir => resolve(`src/${dir}.js`)), resolve(`npm`))
];
