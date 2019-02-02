'use strict';

const { matches } = require('corie-utils');
const { resolve } = require('./common');
const merge = require('lodash/merge');

function configure(input, output) {
  merge(
    {},
    {
      inputOptions: {},
      outputOptions: {
        format: 'cjs',
        exports: 'named',
        legacy: true,
        esModule: false
      }
    },
    {
      inputOptions: {
        input: matches(input.map(n => resolve(n)))
      },
      outputOptions: {
        dir: resolve(output)
      }
    }
  );
}

module.exports = [
  configure('src/*.js', 'dist/es5'),
  configure('src/date/*.js', 'dist/es5/date'),
  configure('src/array/*.js', 'dist/es5/array')
];
