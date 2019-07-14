'use strict';

const { matches } = require('kyla/path');
const { resolve, sourceDir, DIST_FILENAME } = require('./_util');

function configure(input, output) {
  const isDIR = input.indexOf('*') > -1;
  return {
    inputOptions: {
      input: isDIR ? matches(resolve(input)) : resolve(input)
    },
    outputOptions: {
      dir: isDIR ? resolve(output) : undefined,
      file: isDIR ? undefined : resolve(output),
      format: 'cjs',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure('npm/index.js', `npm/dist/${DIST_FILENAME}.c.js`),
  ...sourceDir.map(dir => configure(`npm/${dir}.js`, `npm/dist/${dir}.c.js`))
];
