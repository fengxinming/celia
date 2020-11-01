const path = require('path');
const alias = require('@rollup/plugin-alias');
const match = require('rollup-plugin-match');
const empty = require('rollup-plugin-empty');
const combine = require('rollup-plugin-combine');
const copy = require('rollup-plugin-copy');
const importEs6 = require('../../plugins/rollup-plugin-import-es6');
const pkg = require('./package.json');

const banner = `/* ${pkg.name} v${pkg.version}. */`;

module.exports = {
  input: 'src/*.js',
  external(resolveId) {
    return /^celia\.(is)/.test(resolveId);
  },
  plugins: [
    empty({
      silent: false,
      dir: 'dist'
    }),
    alias({
      entries: [{
        find: /^celia\.([a-zA-Z]+)/,
        replacement: `${path.join(__dirname, '..')}/$1/src`
      }]
    }),
    match(),
    importEs6(),
    combine({
      outputDir: true
    }),
    copy({
      targets: [
        { src: ['README.md', 'package.json'], dest: 'dist' }
      ]
    })
  ],
  output: [{
    banner,
    dir: 'dist/es',
    format: 'esm'
  }, {
    banner,
    dir: 'dist',
    format: 'cjs'
  }]
};
