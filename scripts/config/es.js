'use strict';

const { resolve, releaseDir, apiNames } = require('../util');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'es'
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), releaseDir(`es.js`)),
  configure(apiNames.map(dir => resolve(`src/${dir}.js`)), releaseDir('es'))
];
