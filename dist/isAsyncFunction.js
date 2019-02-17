/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-bdd0d3b2.js');

function isAsyncFunction (value) {
  return __chunk_1.getRawType(value) === '[object AsyncFunction]';
}

module.exports = isAsyncFunction;
