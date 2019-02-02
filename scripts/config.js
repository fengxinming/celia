'use strict';

const path = require('path');
const buble = require('rollup-plugin-buble');
const alias = require('rollup-plugin-alias');
const cjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const node = require('rollup-plugin-node-resolve');
const flow = require('rollup-plugin-flow-no-whitespace');
const {
  uglify
} = require('rollup-plugin-uglify');
const { matches } = require('corie-utils');

const {
  version
} = require('../package.json');

const DIST_FILENAME = 'celia';

const banner =
  '/*!\n' +
  ' * celia.js v' + version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' Jesse Feng\n' +
  ' * Released under the MIT License.\n' +
  ' */';

const resolve = p => path.resolve(__dirname, '../', p);

const builds = {
  'celia-es5-cjs': {
    inputOptions: {
      input: matches([
        resolve('src/utils/*.js'),
        resolve('src/date/*.js'),
        resolve('src/array/*.js')
      ])
    },
    outputOptions: {
      dir: resolve('dist/es5'),
      format: 'cjs',
      exports: 'named',
      legacy: true,
      esModule: false,
      banner
    }
  },
  'celia-esm': {
    inputOptions: {
      input: matches([
        resolve('src/utils/*.js')
      ])
    },
    outputOptions: {
      dir: resolve('dist/'),
      format: 'es',
      banner
    }
  },
  'celia-dev': {
    inputOptions: {
      input: resolve('src/index.js')
    },
    outputOptions: {
      file: resolve(`dist/${DIST_FILENAME}.js`),
      format: 'umd',
      banner
    },
    replaceAll: {
      'process.env.NODE_ENV': JSON.stringify('development')
    }
  },
  'celia-prod': {
    inputOptions: {
      input: resolve('src/index.js')
    },
    outputOptions: {
      file: resolve(`dist/${DIST_FILENAME}.min.js`),
      format: 'umd',
      banner
    },
    isProd: true,
    replaceAll: {
      'process.env.NODE_ENV': JSON.stringify('production')
    }
  },
  'celia-es5': {
    inputOptions: {
      input: matches([
        resolve('src/date/*.js'),
        resolve('src/utils/*.js')
      ]),
      experimentalCodeSplitting: true
    },
    outputOptions: {
      dir: resolve('es5/'),
      format: 'cjs',
      exports: 'named',
      banner
    }
  }
};

function genConfig(name) {
  const opts = builds[name];
  const {
    inputOptions,
    outputOptions,
    aliases,
    replaceAll,
    isProd = false
  } = opts;
  inputOptions.plugins = [
    replace(Object.assign({
      __VERSION__: version
    }, replaceAll)),
    flow(),
    buble(),
    alias(Object.assign({
      '@': resolve('./')
    }, aliases)),
    node({
      module: true,
      jsnext: true,
      main: true
    }),
    cjs(),
    isProd && uglify({
      output: {
        ascii_only: true,
        preamble: banner
      },
      compress: {
        pure_funcs: ['makeMap']
      }
    })
  ].concat(inputOptions.plugins || []);

  outputOptions.banner = banner;
  outputOptions.freeze = false;
  // outputOptions.exports = 'named';
  if (!outputOptions.name) {
    outputOptions.name = 'celia';
  }

  Object.defineProperty(opts, '_name', {
    enumerable: false,
    value: name
  });

  return opts;
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET);
} else {
  exports.getBuild = genConfig;
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
}
