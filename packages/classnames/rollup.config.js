const empty = require('rollup-plugin-empty');
const copy = require('rollup-plugin-copy');
const importEs6 = require('../../plugins/rollup-plugin-import-es6');
const pkg = require('./package.json');

const banner = `/* ${pkg.name} v${pkg.version}. */`;

module.exports = {
  input: 'src/index.js',
  plugins: [
    empty({
      silent: false,
      dir: 'dist'
    }),
    importEs6(),
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
