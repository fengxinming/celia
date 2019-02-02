/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-77777e75.js');
require('./isNil.js');
require('./isNumber.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
require('./chunk-62d1d729.js');
require('./chunk-381503a2.js');
require('./chunk-a96faef0.js');
require('./isDate.js');
require('./isObject.js');
require('./isString.js');
require('./chunk-cf5c46b9.js');
var __chunk_7 = require('./chunk-0e93d1f3.js');
var add = require('./add.js');
var clone = require('./clone.js');
var parse = require('./parse.js');

function monthDiff(a, b) {
  var wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  var anchor = add.default(clone.default(a), wholeMonthDiff, 'months');
  var anchor2, adjust;

  if (b - anchor < 0) {
    anchor2 = add.default(clone.default(a), wholeMonthDiff - 1, 'months');
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = add.default(clone.default(a), wholeMonthDiff + 1, 'months');
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}

function absFloor(number) {
  return number < 0 ? (Math.ceil(number) || 0) : Math.floor(number);
}

function diff (date, input, units, asFloat) {
  input = parse.default(input);
  var output;
  units = __chunk_7.normalizeUnit(units);

  switch (units) {
    case __chunk_7.YEAR:
      output = monthDiff(date, input) / 12;
      break;
    case __chunk_7.MONTH:
      output = monthDiff(date, input);
      break;
    case __chunk_7.SECOND:
      output = (date - input) / 1000;
      break;
    case __chunk_7.MINUTE:
      output = (date - input) / 60000;
      break;
    case __chunk_7.HOUR:
      output = (date - input) / 3600000;
      break;
    case __chunk_7.DAY:
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}

exports.default = diff;
