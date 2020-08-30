'use strict';

const empty = require('rollup-plugin-empty');
const copy = require('rollup-plugin-copy');
const pkg = require('./package.json');

const banner = `/* ${pkg.name}.js v${pkg.version} (c) 2020-${new Date().getFullYear()} Jesse Feng Released under the MIT License. */`;

module.exports = {
  input: 'src/index.js',
  plugins: [
    empty({
      silent: false,
      dir: 'dist'
    }),
    copy({
      targets: [
        { src: ['README.md', 'package.json'], dest: 'dist' }
      ]
    })
  ],
  output: [{
    banner,
    file: 'dist/index.esm.js',
    format: 'esm'
  }, {
    banner,
    file: 'dist/index.js',
    format: 'cjs'
  }]
};
