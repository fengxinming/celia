/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
var __chunk_2 = require('./chunk-3a10f6a8.js');

function daysInMonth (date) {
  return __chunk_2.daysInYear(date)[date.getMonth()];
}

module.exports = daysInMonth;
