/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function isLeapYear (date) {
  var year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

var toString = Object.prototype.toString;

function newIterator(iterator, context) {
  return context ? iterator.bind(context) : iterator;
}
function getRawType(value) {
  return toString.call(value);
}
var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var arr2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function daysInYear(date) {
  return isLeapYear(date) ? arr2 : arr;
}

exports.newIterator = newIterator;
exports.daysInYear = daysInYear;
exports.isLeapYear = isLeapYear;
exports.getRawType = getRawType;