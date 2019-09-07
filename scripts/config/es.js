'use strict';

const { resolve, releaseDir } = require('../util');

function configure(input, output) {
  return {
    inputOptions: {
      input
    },
    outputOptions: {
      file: output,
      format: 'es'
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), releaseDir(`es.js`))
];
