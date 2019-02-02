/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
require('./chunk-63c0b947.js');
require('./chunk-381503a2.js');
require('./isString.js');
var __chunk_7 = require('./chunk-0e93d1f3.js');

function startOf (date, units) {
  units = __chunk_7.normalizeUnit(units);
  switch (units) {
    case __chunk_7.YEAR:
      date.setMonth(0);
    /* falls through */
    case __chunk_7.MONTH:
      date.setDate(1);
    /* falls through */
    case __chunk_7.DAY:
      date.setHours(0);
    /* falls through */
    case __chunk_7.HOUR:
      date.setMinutes(0);
    /* falls through */
    case __chunk_7.MINUTE:
      date.setSeconds(0);
    /* falls through */
    case __chunk_7.SECOND:
      date.setMilliseconds(0);
  }

  return date;
}

exports.default = startOf;
