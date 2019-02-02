/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isNil.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
var __chunk_4 = require('./chunk-381503a2.js');
var isObject = require('./isObject.js');
require('./isString.js');
var __chunk_6 = require('./chunk-cf5c46b9.js');
var __chunk_7 = require('./chunk-0e93d1f3.js');

var indexOfUnits = {};
indexOfUnits[__chunk_7.YEAR] = 0;
indexOfUnits[__chunk_7.MONTH] = 1;
indexOfUnits[__chunk_7.DAY] = 2;
indexOfUnits[__chunk_7.HOUR] = 3;
indexOfUnits[__chunk_7.MINUTE] = 4;
indexOfUnits[__chunk_7.SECOND] = 5;
indexOfUnits[__chunk_7.MILLISECOND] = 6;

function getIndex(units) {
  units = units ? __chunk_7.normalizeUnit(units) : __chunk_7.MILLISECOND;
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
  if (isObject.default(num)) {
    __chunk_4.forIn(num, function (val, key) {
      var index = getIndex(key);
      arr[index] += val;
    });
  } else {
    var index = getIndex(units);
    arr[index] += num;
  }
  date.setTime(+__chunk_6.parseArray(arr));
  return date;
}

exports.default = add;
