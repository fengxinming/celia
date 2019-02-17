/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-bdd0d3b2.js');
var __chunk_2 = require('./chunk-5eff1713.js');
var isNumber = require('./isNumber.js');
require('./isNil.js');
require('./isFunction.js');
var isArrayLike = require('./isArrayLike.js');
var __chunk_3 = require('./chunk-3e6acf32.js');
var __chunk_4 = require('./chunk-e79a056b.js');

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
