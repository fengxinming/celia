/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_4 = require('./chunk-381503a2.js');
var isString = require('./isString.js');

var YEAR = 'years';
var MONTH = 'months';
var DATE = 'dates';
var DAY = 'days';
var HOUR = 'hours';
var MINUTE = 'minutes';
var SECOND = 'seconds';
var MILLISECOND = 'milliseconds';

var UNIT = ({
  YEAR: YEAR,
  MONTH: MONTH,
  DATE: DATE,
  DAY: DAY,
  HOUR: HOUR,
  MINUTE: MINUTE,
  SECOND: SECOND,
  MILLISECOND: MILLISECOND
});

var UNITS = {};
__chunk_4.forIn(UNIT, function (val) {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[val.slice(0, 1)] = val;
});
UNITS.M = MONTH;
UNITS.m = MINUTE;
UNITS.ms = MILLISECOND;

function normalizeUnit (u) {
  return isString.default(u) ? UNITS[u] : undefined;
}

exports.YEAR = YEAR;
exports.MONTH = MONTH;
exports.DAY = DAY;
exports.HOUR = HOUR;
exports.MINUTE = MINUTE;
exports.SECOND = SECOND;
exports.MILLISECOND = MILLISECOND;
exports.normalizeUnit = normalizeUnit;
