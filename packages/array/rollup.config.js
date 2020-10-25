const path = require('path');
const alias = require('@rollup/plugin-alias');
const match = require('rollup-plugin-match');
const empty = require('rollup-plugin-empty');
const combine = require('rollup-plugin-combine');
const copy = require('rollup-plugin-copy');
const pkg = require('./package.json');

const banner = `/* ${pkg.name}.js v${pkg.version} (c) 2020-${new Date().getFullYear()} Jesse Feng Released under the MIT License. */`;

module.exports = {
  input: 'src/*.js',
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
