/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isNil = require('./isNil.js');
var isFunction = require('./isFunction.js');

var isArray = Array.isArray;

function isArrayLike (value) {
  if (isNil(value) || isFunction(value)) {
    return false;
  }
  var length = value.length;
  return isArray(value) || length === 0 || (+length > 0 && (length - 1) in value);
}

module.exports = isArrayLike;
