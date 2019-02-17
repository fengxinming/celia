/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function isNil (value) {
  /* eslint eqeqeq: 0 */
  return value == null;
}

function isFunction (value) {
  return typeof value === 'function';
}

var isArray = Array.isArray;

function isArrayLike (value) {
  if (isNil(value) || isFunction(value)) {
    return false;
  }
  var length = value.length;
  return isArray(value) || length === 0 || (+length > 0 && (length - 1) in value);
}

exports.isArrayLike = isArrayLike;
exports.isNil = isNil;
