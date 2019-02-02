/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-77777e75.js');

function camelCase (value) {
  return value.replace(__chunk_1.DASH_ALPHA_REGEX, function (val, letter) {
    return letter.toUpperCase();
  });
}

exports.default = camelCase;
