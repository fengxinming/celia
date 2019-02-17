/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-bdd0d3b2.js');
var __chunk_2 = require('./chunk-5eff1713.js');
var isNumber = require('./isNumber.js');
var isUndefined = require('./isUndefined.js');
var isNil = require('./isNil.js');
var isString = require('./isString.js');
var __chunk_3 = require('./chunk-3e6acf32.js');
var __chunk_4 = require('./chunk-e79a056b.js');
var __chunk_5 = require('./chunk-2a5631bb.js');
var isObject = require('./isObject.js');
var isDate = require('./isDate.js');

/**
 * 将数组解析成date
 * @param {Array} arr
 * @param {Boolean|undefined} isUTC
 */
function parseArray (arr, isUTC) {
  var date = isUTC ?
    new Date(Date.UTC(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    )) : new Date(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    );
  return date;
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
__chunk_3.forIn(UNIT, function (val) {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[val.slice(0, 1)] = val;
});
UNITS.M = MONTH;
UNITS.m = MINUTE;
UNITS.ms = MILLISECOND;

function normalizeUnit (u) {
  return isString(u) ? UNITS[u] : undefined;
}

var indexOfUnits = {};
indexOfUnits[YEAR] = 0;
indexOfUnits[MONTH] = 1;
indexOfUnits[DAY] = 2;
indexOfUnits[HOUR] = 3;
indexOfUnits[MINUTE] = 4;
indexOfUnits[SECOND] = 5;
indexOfUnits[MILLISECOND] = 6;

function getIndex(units) {
  units = units ? normalizeUnit(units) : MILLISECOND;
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
  date.setTime(+parseArray(arr));
  return date;
}

function clone (date) {
  return new Date(+date);
}

function dayOfYear (date, val) {
  var arr = __chunk_1.daysInYear(date);
  var month = date.getMonth();
  var count = 0;
  __chunk_4.forNumber(month, function (i) {
    count += arr[i];
  });
  count += date.getDate();
  if (isUndefined(val)) {
    return count;
  } else {
    date.setTime(+date + ((val - count) * 86400000));
    return date;
  }
}

function daysInMonth (date) {
  return __chunk_1.daysInYear(date)[date.getMonth()];
}

var TIMEZONE_OFFSET = (new Date()).getTimezoneOffset();

/**
 * 智能提取年月日时分秒
 * @param {String} input 时间字符串
 */
function extractFrom(input) {
  var allowTime, matches;
  var dateArr = [];
  var match = __chunk_5.EXTENDED_ISO_REGEX.exec(input) || __chunk_5.BASIC_ISO_REGEX.exec(input);
  if (match) {
    // 解析YYYY-MM-DD
    __chunk_2.forEach(__chunk_5.DATES_REGEX, function (item, i) {
      if ((matches = item[1].exec(match[1]))) {
        __chunk_4.forNumber(3, function (i) {
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
      __chunk_2.forEach(__chunk_5.TIMES_REGEX, function (item) {
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
      matches = __chunk_5.TZ_REGEX.exec(match[4]);
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
    if (input.length === 4 && __chunk_5.DATES_REGEX[4][1].test(input)) {
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
  __chunk_4.forNumber(len, function (i) {
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
    if ((matches = __chunk_5.TZ_REGEX.exec(input.slice(format.indexOf('ZZ') > -1 ? -5 : -6)))) {
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
  if (!isNil(arr[1])) {
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
  if (isString(input)) {
    if (isString(format)) {
      return parseArray(parseFromFormat(input, format), isUTC);
    } else {
      // 自动判断格式
      var arr = extractFrom(input);
      if (arr !== input) {
        return parseArray(arr, arr.isUTC || format === true);
      }
    }
  } else {
    return parseArray(input, format === true);
  }
  var matched = __chunk_5.ASP_NET_JSON_REGEX.exec(input);
  return new Date(matched !== null ? +matched[1] : input);
}

function parse (input, format, isUTC) {
  if (isNil(input)) {
    input = new Date();
  } else if (input.length) {
    input = parseStringOrArray(input, format, isUTC);
  } else if (isNumber(input)) {
    input = new Date(input);
  } else if (isDate(input)) {
    input = new Date(+input);
  } else if (input._i && input.isValid()) {
    input = new Date(+input);
  } else {
    // input = [], {}, etc
    input = new Date();
  }
  return input;
}

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
  units = normalizeUnit(units);

  switch (units) {
    case YEAR:
      output = monthDiff(date, input) / 12;
      break;
    case MONTH:
      output = monthDiff(date, input);
      break;
    case SECOND:
      output = (date - input) / 1000;
      break;
    case MINUTE:
      output = (date - input) / 60000;
      break;
    case HOUR:
      output = (date - input) / 3600000;
      break;
    case DAY:
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}

function startOf (date, units) {
  units = normalizeUnit(units);
  switch (units) {
    case YEAR:
      date.setMonth(0);
    /* falls through */
    case MONTH:
      date.setDate(1);
    /* falls through */
    case DAY:
      date.setHours(0);
    /* falls through */
    case HOUR:
      date.setMinutes(0);
    /* falls through */
    case MINUTE:
      date.setSeconds(0);
    /* falls through */
    case SECOND:
      date.setMilliseconds(0);
  }

  return date;
}

function endOf (date, units) {
  units = normalizeUnit(units);
  if (!units || units === MILLISECOND) {
    return date;
  }
  startOf(date, units);
  add(date, 1, units);
  add(date, -1, MILLISECOND);
  return date;
}

function padLeft(val, len) {
  if ( len === void 0 ) len = 2;

  return ("000000" + val).slice(-len);
}

function timezone(minutes, together) {
  var prefix;
  if (minutes < 0) {
    prefix = '+';
    minutes = Math.abs(minutes);
  } else {
    prefix = '-';
  }
  return ("" + prefix + (padLeft(Math.floor(minutes / 60))) + (together ? '' : ':') + (padLeft(Math.floor(minutes % 60))));
}

function h12(hours) {
  hours = hours || 24;
  return hours > 12 ? hours - 12 : hours;
}

function format (date, inputString) {
  if (!inputString) {
    return date.toISOString();
  }
  return inputString.replace(__chunk_5.FORMAT_REGEX, function (matched) {
    switch (matched) {
      case 'YY':
        return String(date.getFullYear()).slice(-2);
      case 'YYYY':
      case 'yyyy':
        return date.getFullYear();
      case 'M':
        return date.getMonth() + 1;
      case 'MM':
        return padLeft(date.getMonth() + 1);
      case 'D':
      case 'd':
        return date.getDate();
      case 'DD':
      case 'dd':
        return padLeft(date.getDate());
      // case 'T':
      //   return ' ';
      case 'H':
        return date.getHours();
      case 'HH':
        return padLeft(date.getHours());
      case 'h':
        return h12(date.getHours());
      case 'hh':
        return padLeft(h12(date.getHours()));
      case 'm':
        return date.getMinutes();
      case 'mm':
        return padLeft(date.getMinutes());
      case 's':
        return date.getSeconds();
      case 'ss':
        return padLeft(date.getSeconds());
      case 'SSS':
        return padLeft(date.getMilliseconds(), 3);
      case 'Z':
        return timezone(date.getTimezoneOffset());
      case 'ZZ':
        return timezone(date.getTimezoneOffset(), true);
      default:
        return matched;
    }
  });
}

function compare (date, input, units, type) {
  input = parse(input);
  units = normalizeUnit(!isUndefined(units) ? units : MILLISECOND);
  if (units === MILLISECOND) {
    switch (type) {
      case 'before':
        return +date < +input;
      case 'after':
        return +date > +input;
      default:
        return +date === +input;
    }
  } else {
    var inputMs = +input;
    switch (type) {
      case 'before':
        return +endOf(clone(date), units) < inputMs;
      case 'after':
        return +startOf(clone(date), units) > inputMs;
      default:
        return +startOf(clone(date), units) <= inputMs && inputMs <= +endOf(clone(date), units);
    }
  }
}

function isAfter (date, input, units) {
  return compare(date, input, units, 'after');
}

function isBefore (date, input, units) {
  return compare(date, input, units, 'before');
}

function isBetween (date, from, to, units, inclusivity) {
  inclusivity = inclusivity || '()';
  return (inclusivity.charAt(0) === '(' ? isAfter(date, from, units) : !isBefore(date, from, units)) &&
    (inclusivity.charAt(1) === ')' ? isBefore(date, to, units) : !isAfter(date, to, units));
}

function isSame (date, input, units) {
  return compare(date, input, units);
}

function isSameOrAfter (date, input, units) {
  return !isBefore(date, input, units);
}

function isSameOrBefore (date, input, units) {
  return !isAfter(date, input, units);
}

function isValid (date) {
  return date.toString() !== 'Invalid Date';
}

function subtract (date, num, unit) {
  return add(date, -num, unit);
}

var date = {
  add: add,
  clone: clone,
  dayOfYear: dayOfYear,
  daysInMonth: daysInMonth,
  diff: diff,
  endOf: endOf,
  format: format,
  isAfter: isAfter,
  isBefore: isBefore,
  isBetween: isBetween,
  isLeapYear: __chunk_1.isLeapYear,
  isSame: isSame,
  isSameOrAfter: isSameOrAfter,
  isSameOrBefore: isSameOrBefore,
  isValid: isValid,
  parse: parse,
  startOf: startOf,
  subtract: subtract
};

module.exports = date;
