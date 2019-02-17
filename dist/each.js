/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-f7046d4d.js');
var __chunk_2 = require('./chunk-45a38186.js');
var isNumber = require('./isNumber.js');
require('./isNil.js');
require('./isFunction.js');
var isArrayLike = require('./isArrayLike.js');
var __chunk_3 = require('./chunk-5ca5f7da.js');
var __chunk_4 = require('./chunk-a45738ca.js');

function each (arr, cb, context) {
  if (arr) {
    if (isArrayLike(arr)) {
      __chunk_2.forEach(arr, cb, context);
    } else if (isNumber(arr)) {
      __chunk_4.forNumber(arr, cb, context);
    } else {
      __chunk_3.forIn(arr, cb, context);
    }
  }
}

module.exports = each;
