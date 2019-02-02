/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isNil.js');
require('./isFunction.js');
var isArrayLike = require('./isArrayLike.js');
var isNumber = require('./isNumber.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
var __chunk_3 = require('./chunk-62d1d729.js');
var __chunk_4 = require('./chunk-381503a2.js');
var __chunk_5 = require('./chunk-a96faef0.js');

function each (arr, cb, context) {
  if (arr) {
    if (isArrayLike.default(arr)) {
      __chunk_3.forEach(arr, cb, context);
    } else if (isNumber.default(arr)) {
      __chunk_5.forNumber(arr, cb, context);
    } else {
      __chunk_4.forIn(arr, cb, context);
    }
  }
}

exports.default = each;
