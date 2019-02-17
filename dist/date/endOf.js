/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-57c66484.js');
var add = require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a6d201e.js');
var __chunk_3 = require('./chunk-1a10349c.js');
require('./chunk-e454aef8.js');
var startOf = require('./startOf.js');

function endOf (date, units) {
  units = __chunk_3.normalizeUnit(units);
  if (!units || units === __chunk_3.MILLISECOND) {
    return date;
  }
  startOf(date, units);
  add(date, 1, units);
  add(date, -1, __chunk_3.MILLISECOND);
  return date;
}

module.exports = endOf;
