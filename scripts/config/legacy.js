'use strict';

const { matches } = require('corie-utils');
const { resolve } = require('./_util');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input: matches(resolve(input))
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
  configure('src/*.js', 'legacy'),
  configure('src/date/*.js', 'legacy/date'),
  configure('src/array/*.js', 'legacy/array')
];
