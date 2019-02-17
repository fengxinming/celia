/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-006b22f6.js');
require('./isLeapYear.js');
require('./chunk-3a10f6a8.js');
var __chunk_3 = require('./chunk-e81b0eeb.js');
require('./chunk-1535a567.js');

function isObject (value) {
  return !__chunk_1.isNil(value) && typeof value === 'object';
}

var indexOfUnits = {};
indexOfUnits[__chunk_3.YEAR] = 0;
indexOfUnits[__chunk_3.MONTH] = 1;
indexOfUnits[__chunk_3.DAY] = 2;
indexOfUnits[__chunk_3.HOUR] = 3;
indexOfUnits[__chunk_3.MINUTE] = 4;
indexOfUnits[__chunk_3.SECOND] = 5;
indexOfUnits[__chunk_3.MILLISECOND] = 6;

function getIndex(units) {
  units = units ? __chunk_3.normalizeUnit(units) : __chunk_3.MILLISECOND;
  return indexOfUnits[units];
}

function add (date, num, units) {
  var arr = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
  if (isObject(num)) {
    __chunk_3.forIn(num, function (val, key) {
      var index = getIndex(key);
      arr[index] += val;
    });
  } else {
    var index = getIndex(units);
    arr[index] += num;
  }
  date.setTime(+__chunk_1.parseArray(arr));
  return date;
}

module.exports = add;
