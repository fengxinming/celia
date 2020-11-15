import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import alias from '@rollup/plugin-alias';
// eslint-disable-next-line import/no-extraneous-dependencies
import match from 'rollup-plugin-match';
// eslint-disable-next-line import/no-extraneous-dependencies
import empty from 'rollup-plugin-empty';
// eslint-disable-next-line import/no-extraneous-dependencies
import combine from 'rollup-plugin-combine';
// eslint-disable-next-line import/no-extraneous-dependencies
import copy from 'rollup-plugin-copy';
import importEs6 from '../../plugins/rollup-plugin-import-es6';
import pkg from './package.json';

const banner = `/* ${pkg.name} v${pkg.version}. */`;

export default {
  input: 'src/*.js',
  external(resolveId) {
    return /^celia\.([a-zA-Z]+)/.test(resolveId);
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
