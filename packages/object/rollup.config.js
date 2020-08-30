'use strict';

const match = require('rollup-plugin-match');
const empty = require('rollup-plugin-empty');
const combine = require('rollup-plugin-combine');
const copy = require('rollup-plugin-copy');
const pkg = require('./package.json');

const banner = `/* ${pkg.name}.js v${pkg.version} */`;

module.exports = {
  input: 'src/*.js',
  plugins: [
    empty({
      silent: false,
      dir: 'dist'
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
