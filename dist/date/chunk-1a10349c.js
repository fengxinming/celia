/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_2 = require('./chunk-3a6d201e.js');
var __chunk_4 = require('./chunk-e454aef8.js');

function forIn (value, iterator, context) {
  var cb = __chunk_2.newIterator(iterator, context);
  for (var key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    }  }
}

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
forIn(UNIT, function (val) {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[val.slice(0, 1)] = val;
});
UNITS.M = MONTH;
UNITS.m = MINUTE;
UNITS.ms = MILLISECOND;

function normalizeUnit (u) {
  return __chunk_4.isString(u) ? UNITS[u] : undefined;
}

exports.forIn = forIn;
exports.YEAR = YEAR;
exports.MONTH = MONTH;
exports.DAY = DAY;
exports.HOUR = HOUR;
exports.MINUTE = MINUTE;
exports.SECOND = SECOND;
exports.MILLISECOND = MILLISECOND;
exports.normalizeUnit = normalizeUnit;
