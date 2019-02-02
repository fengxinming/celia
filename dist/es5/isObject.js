/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isNil = require('./isNil.js');

function isObject (value) {
  return !isNil.default(value) && typeof value === 'object';
}

exports.default = isObject;
