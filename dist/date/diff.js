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
var clone = require('./clone.js');
require('./chunk-e9478a8f.js');
require('./chunk-68e6a317.js');
var parse = require('./parse.js');

function monthDiff(a, b) {
  var wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  var anchor = add(clone(a), wholeMonthDiff, 'months');
  var anchor2, adjust;

  if (b - anchor < 0) {
    anchor2 = add(clone(a), wholeMonthDiff - 1, 'months');
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = add(clone(a), wholeMonthDiff + 1, 'months');
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}

function absFloor(number) {
  return number < 0 ? (Math.ceil(number) || 0) : Math.floor(number);
}

function diff (date, input, units, asFloat) {
  input = parse(input);
  var output;
  units = __chunk_3.normalizeUnit(units);

  switch (units) {
    case __chunk_3.YEAR:
      output = monthDiff(date, input) / 12;
      break;
    case __chunk_3.MONTH:
      output = monthDiff(date, input);
      break;
    case __chunk_3.SECOND:
      output = (date - input) / 1000;
      break;
    case __chunk_3.MINUTE:
      output = (date - input) / 60000;
      break;
    case __chunk_3.HOUR:
      output = (date - input) / 3600000;
      break;
    case __chunk_3.DAY:
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}

module.exports = diff;
