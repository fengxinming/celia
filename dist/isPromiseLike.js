/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isFunction = require('./isFunction.js');

function isPromiseLike (value) {
  return value && isFunction(value.then);
}

module.exports = isPromiseLike;
