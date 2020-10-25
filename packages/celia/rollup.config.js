const path = require('path');
const fs = require('fs');
const buble = require('@rollup/plugin-buble');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const alias = require('@rollup/plugin-alias');
const replace = require('@rollup/plugin-replace');
const empty = require('rollup-plugin-empty');
const match = require('rollup-plugin-match');
const combine = require('rollup-plugin-combine');
const { terser } = require('rollup-plugin-terser');
const copy = require('rollup-plugin-copy');
const pkg = require('./package.json');

const banner = `/* ${pkg.name}.js v${pkg.version} (c) 2018-${new Date().getFullYear()} Jesse Feng Released under the MIT License. */`;

function importEs6() {
  return {
    name: 'import-es6',
    renderChunk(code, chunk, options) {
      if (['es', 'esm'].indexOf(options.format) >-1) {
        chunk.imports = chunk.imports.map((mod) => {
          return mod.replace(/^(\S+)\/(\S+)$/, '$1/es/$2');
        });
        return code.replace(/'(\S+)\/(\S+)'/g, '\'$1/es/$2\'');
      }
    }
  };
}

function getInput() {
  return [
    '../array/src/*.js',
    '../is/src/*.js',
    '../object/src/*.js',
  ];
}

function getReplacements() {
  return ['array', 'is', 'object'].reduce((prev, mod)=> {
    const dir = path.join(__dirname, '..', mod).replace(/\\/g, '/');
    prev[`${dir}/src`] = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf-8')).name;
    return prev;
  }, {});
}

function getPlugins() {
  return [
    match(),
    combine(),
    alias({
      entries: [{
        find: /^celia\.([a-zA-Z]+)/,
        replacement: `${path.join(__dirname, '..')}/$1/src`
      }]
    }),
    buble(),
    nodeResolve(),
    commonjs(),
    terser({
      include: /^.+\.min\.js$/,
      output: { preamble: banner }
    }),
    copy({
      targets: [
        { src: ['README.md', 'package.json'], dest: 'dist' }
      ]
    })
  ];
}

module.exports = [{
  input: getInput(),
  external(id) {
    return id.startsWith('celia.');
  },
  plugins: [
    ...getPlugins(),
    replace(getReplacements()),
    empty({
      silent: false,
      dir: 'dist'
    }), 
    importEs6()
  ],
  output: [{
    banner,
    file: `dist/${pkg.module}`,
    format: 'esm',
    name: pkg.name
  }, {
    banner,
    file: `dist/${pkg.main}`,
    format: 'cjs',
    name: pkg.name
  }]
}, {
  input: getInput(),
  plugins: getPlugins(),
  output: [{
    banner,
    file: `dist/${pkg.jsdelivr}`,
    format: 'umd',
    name: pkg.name
  }, {
    banner,
    file: `dist/${pkg.jsdelivr.replace(/(.+)\.js$/, '$1.min.js')}`,
    format: 'umd',
    name: pkg.name
  }]
}];
