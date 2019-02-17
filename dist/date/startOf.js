/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
require('./chunk-3a6d201e.js');
var __chunk_3 = require('./chunk-1a10349c.js');
require('./chunk-e454aef8.js');

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
