/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-006b22f6.js');
var add = require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a10f6a8.js');
var __chunk_3 = require('./chunk-e81b0eeb.js');
require('./chunk-1535a567.js');
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
