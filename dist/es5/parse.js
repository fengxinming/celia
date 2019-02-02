/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-77777e75.js');
var isNil = require('./isNil.js');
var isNumber = require('./isNumber.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
var __chunk_3 = require('./chunk-62d1d729.js');
var __chunk_5 = require('./chunk-a96faef0.js');
var isDate = require('./isDate.js');
var isString = require('./isString.js');
var __chunk_6 = require('./chunk-cf5c46b9.js');

var TIMEZONE_OFFSET = (new Date()).getTimezoneOffset();

/**
 * 智能提取年月日时分秒
 * @param {String} input 时间字符串
 */
function extractFrom(input) {
  var allowTime, matches;
  var dateArr = [];
  var match = __chunk_1.EXTENDED_ISO_REGEX.exec(input) || __chunk_1.BASIC_ISO_REGEX.exec(input);
  if (match) {
    // 解析YYYY-MM-DD
    __chunk_3.forEach(__chunk_1.DATES_REGEX, function (item, i) {
      if ((matches = item[1].exec(match[1]))) {
        __chunk_5.forNumber(3, function (i) {
          dateArr[i] = parseInt(matches[i + 1] || 1, 10);
        });
        dateArr[1] -= 1;
        allowTime = item[2] !== false;
        return false;
      }
    });
    if (input.indexOf(dateArr[0])) {
      return input;
    }
    // if (!dateArr.length) {
    //   return input;
    // }
    // 解析hh:mm:ss
    matches = null;
    if (match[3]) {
      __chunk_3.forEach(__chunk_1.TIMES_REGEX, function (item) {
        if ((matches = item[1].exec(match[3]))) {
          dateArr = dateArr.concat(matches.slice(1).map(function (n) { return parseInt(n, 10); }));
          return false;
        }
      });
      // if (!matches) {
      //   return dateArr;
      // }
    }
    if (!allowTime && matches) {
      return dateArr;
    }
    matches = null;
    // 时区问题
    if (match[4]) {
      matches = __chunk_1.TZ_REGEX.exec(match[4]);
      // 时区
      var offset = TIMEZONE_OFFSET;
      // 匹配到+08:00
      if (!matches[1]) {
        dateArr[3] -= matches[2];
        dateArr[4] -= matches[3] || 0;
      }
      // 统一成当前时区
      dateArr[4] -= offset;
    }
    return dateArr;
  } else {
    // 再试一次
    if (input.length === 4 && __chunk_1.DATES_REGEX[4][1].test(input)) {
      dateArr = [parseInt(input, 10), 0, 1];
      dateArr.isUTC = true;
      return dateArr;
    }
    return input;
  }
}

/**
 * 解析字符串通过给定的字符串模版
 * @param {String|Array} input
 * @param {String} format
 */
function parseFromFormat(input, format) {
  var len = format.length;
  var arr = [];
  var isUTC = false;
  __chunk_5.forNumber(len, function (i) {
    var ii = input.charAt(i);
    switch (format.charAt(i)) {
      case 'Y':
      case 'y':
        arr[0] = (arr[0] || '') + ii;
        break;
      case 'M':
        arr[1] = (arr[1] || '') + ii;
        break;
      case 'D':
      case 'd':
        arr[2] = (arr[2] || '') + ii;
        break;
      case 'H':
      case 'h':
        arr[3] = (arr[3] || '') + ii;
        break;
      case 'm':
        arr[4] = (arr[4] || '') + ii;
        break;
      case 's':
        arr[5] = (arr[5] || '') + ii;
        break;
      case 'S':
        arr[6] = (arr[6] || '') + ii;
        break;
      case 'Z':
        isUTC = true;
        break;
    }
  });
  // 转成数字
  arr = arr.map(function (item) { return parseInt(item, 10); });
  if (isUTC) {
    var matches;
    // 解析秒后面的时区
    if ((matches = __chunk_1.TZ_REGEX.exec(input.slice(format.indexOf('ZZ') > -1 ? -5 : -6)))) {
      // 时区
      var offset = TIMEZONE_OFFSET;
      // 匹配到类似+08:00
      if (!matches[1]) {
        // 如果在东区，需要减去时区
        var eastOrWest = matches[0].charAt(0) === '+' ? 1 : -1;
        arr[3] -= matches[2] * eastOrWest;
        arr[4] -= (matches[3] || 0) * eastOrWest;
      }
      // 统一成当前时区
      arr[4] -= offset;
    } else {
      // 如果按照UTC的模版解析，就不是UTC了
      arr.isUTC = isUTC & input.indexOf('Z') > -1;
    }
  }
  if (!isNil.default(arr[1])) {
    arr[1] -= 1;
  }
  return arr;
}

/**
 * 解析字符串或者数组成date
 * @param {String|Array} input
 * @param {String|Boolean|undefined} format
 * @param {Boolean|undefined} isUTC
 */
function parseStringOrArray(input, format, isUTC) {
  if (isString.default(input)) {
    if (isString.default(format)) {
      return __chunk_6.parseArray(parseFromFormat(input, format), isUTC);
    } else {
      // 自动判断格式
      var arr = extractFrom(input);
      if (arr !== input) {
        return __chunk_6.parseArray(arr, arr.isUTC || format === true);
      }
    }
  } else {
    return __chunk_6.parseArray(input, format === true);
  }
  var matched = __chunk_1.ASP_NET_JSON_REGEX.exec(input);
  return new Date(matched !== null ? +matched[1] : input);
}

function parse (input, format, isUTC) {
  if (isNil.default(input)) {
    input = new Date();
  } else if (input.length) {
    input = parseStringOrArray(input, format, isUTC);
  } else if (isNumber.default(input)) {
    input = new Date(input);
  } else if (isDate.default(input)) {
    input = new Date(+input);
  } else if (input._i && input.isValid()) {
    input = new Date(+input);
  } else {
    // input = [], {}, etc
    input = new Date();
  }
  return input;
}

exports.default = parse;
