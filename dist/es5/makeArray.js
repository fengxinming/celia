/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isNil.js');
require('./isFunction.js');
var isArrayLike = require('./isArrayLike.js');
require('./isNumber.js');
var isString = require('./isString.js');
require('./isUndefined.js');
var merge = require('./merge.js');

var ref = Array.prototype;
var push = ref.push;

function makeArray (arr, results) {
  var ret = results || [];
  if (arr) {
    if (isArrayLike.default(Object(arr))) {
      merge.default(ret, isString.default(arr) ? [arr] : arr);
    } else {
      push.call(ret, arr);
    }
  }
  return ret;
}

exports.default = makeArray;
