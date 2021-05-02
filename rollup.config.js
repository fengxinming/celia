import buble from '@rollup/plugin-buble';
import match from 'rollup-plugin-match';
import empty from 'rollup-plugin-empty';
import combine from 'rollup-plugin-combine';
import copy from 'rollup-plugin-copy';
import replaceImports from 'rollup-plugin-replace-imports';
import pkg from './package.json';

const banner = `/* ${pkg.name}.js v${pkg.version} (c) 2018-${new Date().getFullYear()} `
             + 'Jesse Feng Released under the MIT License. */';

export default [{
  input: 'src/**/*.js',
  plugins: [
    empty({
      silent: false,
      dir: 'dist'
    }),
    copy({
      verbose: true,
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'TNPM_README.md', dest: 'dist', rename: 'README.md' },
        { src: 'types/index.d.ts', dest: 'dist' }
      ]
    }),
    match(),
    combine({
      outputDir: true,
      camelCase: false
    }),
    buble()
  ],
  output: [
    {
      banner,
      dir: 'dist/es',
      format: 'es'
    },
    {
      banner,
      dir: 'dist',
      format: 'cjs',
      exports: 'auto',
      plugins: [
        replaceImports((n) => n.replace('/es/', '/'))
      ]
    }
  ]
}, {
  input: 'src/**/*.js',
  plugins: [
    match(),
    combine({
      camelCase: false
    }),
    buble()
  ],
  output: [{
    banner,
    file: 'dist/umd.js',
    name: pkg.name,
    format: 'umd',
    exports: 'auto'
  }, {
    banner,
    file: 'dist/iife.js',
    name: pkg.name,
    format: 'iife'
  }]
}];
