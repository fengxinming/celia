'use strict';

import isLeapYear from '../date/isLeapYear';

const toString = Object.prototype.toString;

export function newIterator(iterator, context) {
  return context ? iterator.bind(context) : iterator;
};

export function getRawType(value) {
  return toString.call(value);
};

const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const arr2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function daysInYear(date) {
  return isLeapYear(date) ? arr2 : arr;
}
