/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-b98f16c0.js');
var merge = require('./merge.js');
var __chunk_3 = require('./chunk-63afe335.js');

function isString (value) {
  return typeof value === 'string';
}

var ref = Array.prototype;
var push = ref.push;

function makeArray (arr, results) {
  var ret = results || [];
  if (arr) {
    if (__chunk_3.isArrayLike(Object(arr))) {
      merge(ret, isString(arr) ? [arr] : arr);
    } else {
      push.call(ret, arr);
    }
  }
  return ret;
}

module.exports = makeArray;
