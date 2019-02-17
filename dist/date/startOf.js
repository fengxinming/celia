/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
require('./chunk-3a10f6a8.js');
var __chunk_3 = require('./chunk-e81b0eeb.js');
require('./chunk-1535a567.js');

function startOf (date, units) {
  units = __chunk_3.normalizeUnit(units);
  switch (units) {
    case __chunk_3.YEAR:
      date.setMonth(0);
    /* falls through */
    case __chunk_3.MONTH:
      date.setDate(1);
    /* falls through */
    case __chunk_3.DAY:
      date.setHours(0);
    /* falls through */
    case __chunk_3.HOUR:
      date.setMinutes(0);
    /* falls through */
    case __chunk_3.MINUTE:
      date.setSeconds(0);
    /* falls through */
    case __chunk_3.SECOND:
      date.setMilliseconds(0);
  }

  return date;
}

module.exports = startOf;
