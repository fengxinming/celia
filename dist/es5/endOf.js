/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isNil.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
require('./chunk-381503a2.js');
require('./isObject.js');
require('./isString.js');
require('./chunk-cf5c46b9.js');
var __chunk_7 = require('./chunk-0e93d1f3.js');
var add = require('./add.js');
var startOf = require('./startOf.js');

function endOf (date, units) {
  units = __chunk_7.normalizeUnit(units);
  if (!units || units === __chunk_7.MILLISECOND) {
    return date;
  }
  startOf.default(date, units);
  add.default(date, 1, units);
  add.default(date, -1, __chunk_7.MILLISECOND);
  return date;
}

exports.default = endOf;
