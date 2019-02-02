/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
var __chunk_2 = require('./chunk-63c0b947.js');

function isDate (value) {
  return __chunk_2.getRawType(value) === '[object Date]';
}

exports.default = isDate;
