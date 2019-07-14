'use strict';

const { resolve } = require('../util');

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
  configure(resolve('src/index.js'), resolve(`npm/es.js`))
];
