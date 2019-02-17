/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-f7046d4d.js');

function isDate (value) {
  return __chunk_1.getRawType(value) === '[object Date]';
}

module.exports = isDate;
