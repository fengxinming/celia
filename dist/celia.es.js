/*!
 * celia.js v3.0.2
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
function append (arr, obj) {
  if (arr) {
    arr[arr.length] = obj;
    return obj;
  }
}

function iteratorCallback (iterator, context) {
  return context ? iterator.bind(context) : iterator;
}

function forEach (value, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var i = 0, len = value.length, returnValue = (void 0); returnValue !== false && i < len; i++) {
    returnValue = cb(value[i], i, value);
  }
}

function forEach$1 (value, iterator, context) {
  return value && forEach(value, iterator, context);
}

function append$1 (arr, obj) {
  arr[arr.length] = obj;
}

function grep (elems, callback, isOpposite) {
  var matches = [];
  isOpposite = !!isOpposite;
  forEach$1(elems, function (elem, i) {
    if (!callback(elem, i) === isOpposite) {
      append$1(matches, elem);
    }
  });
  return matches;
}

function inArray (elem, arr, fromIndex) {
  if (arr) {
    if (arr.indexOf) {
      return arr.indexOf(elem, fromIndex);
    }
    var len = arr.length;
    var i = fromIndex ? fromIndex < 0 ? Math.max(0, len + fromIndex) : fromIndex : 0;
    for (; i < len; i++) {
      if (i in arr && arr[i] === elem) {
        return i;
      }
    }
  }
  return -1;
}

function includes (elems, value) {
  return inArray(value, elems) !== -1;
}

function join (first, second) {
  var i = first.length;

  forEach$1(second, function (elem) {
    first[i++] = elem;
  });

  // 如果first是arrayLike, 那就需要手动更新长度
  first.length = i;

  return first;
}

function isNil (value) {
  /* eslint eqeqeq: 0 */
  return value == null;
}

function isFunction (value) {
  return typeof value === 'function';
}

function isNumber (value) {
  return typeof value === 'number';
}

function isArrayLike (value) {
  return !isNil(value) && isNumber(value.length) && !isFunction(value);
}

function isString (value) {
  return typeof value === 'string';
}

var ref = Array.prototype;
var push = ref.push;

function makeArray (arr, results) {
  var ret = results || [];
  if (arr) {
    if (isArrayLike(Object(arr))) {
      join(ret, isString(arr) ? [arr] : arr);
    } else {
      ret.push ? ret.push(arr) : push.call(ret, arr);
    }
  }
  return ret;
}

function forIn (value, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    }  }
}

function forNumber (value, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var i = 0, returnValue = (void 0); returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
}

function each (arr, cb, context) {
  if (arr) {
    if (isArrayLike(arr)) {
      forEach(arr, cb, context);
    } else if (isNumber(arr)) {
      forNumber(arr, cb, context);
    } else {
      forIn(arr, cb, context);
    }
  }
}

function map (elems, callback, context) {
  var ret = [];
  var cb = iteratorCallback(callback, context);
  each(elems, function (elem) {
    elem = cb(elem);
    if (!isNil(elem)) {
      append$1(ret, elem);
    }
  });
  return ret;
}

function removeAt (elems, index) {
  elems.splice(index, 1);
  return index;
}

function remove (elems, value) {
  var index = inArray(value, elems);
  if (index >= 0) {
    removeAt(elems, index);
    return value;
  }
  // 删除失败返回null
  return null;
}

function toArray (arrLike) {
  return arrLike && [].concat( arrLike );
  // return arrLike && slice.call(arrLike, 0);
}

var array = {
  append: append,
  forEach: forEach$1,
  grep: grep,
  inArray: inArray,
  includes: includes,
  join: join,
  makeArray: makeArray,
  map: map,
  remove: remove,
  removeAt: removeAt,
  toArray: toArray
};

var DASH_ALPHA_REGEX = /-([a-z])/g;

function camelCase (value) {
  return value.replace(DASH_ALPHA_REGEX, function (val, letter) {
    return letter.toUpperCase();
  });
}

function isObject (value) {
  return !isNil(value) && typeof value === 'object';
}

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

var dateProto = Date.prototype;
/* eslint no-extend-native: 0 */
if (!dateProto.setDay) {
  dateProto.setDay = function (val) {
    var day = this.getDay();
    if (val !== day) {
      this.setTime(+this + ((val - day) * 86400000));
    }
  };
}

var UNITS = {};
var fns = {};

function normalize(u, defaultValue) {
  return UNITS[u] || defaultValue;
}

function setter(longer, shorter, method) {
  var longerish = longer.slice(0, -1);
  UNITS[shorter] = UNITS[longer] = UNITS[longerish] = shorter;
  fns[shorter] = function (date, val) {
    if (isNil(val)) {
      return date[("get" + method)]();
    } else {
      date[("set" + method)](val);
      return date;
    }
  };
}setter('years', 'Y', 'FullYear');
setter('months', 'M', 'Month');
setter('dates', 'D', 'Date');
setter('days', 'd', 'Day');
setter('hours', 'h', 'Hours');
setter('minutes', 'm', 'Minutes');
setter('seconds', 's', 'Seconds');
setter('milliseconds', 'ms', 'Milliseconds');
setter('times', 't', 'Time');

var indexOfUnits = {
  Y: 0,
  M: 1,
  d: 2,
  h: 3,
  m: 4,
  s: 5,
  ms: 6
};

function getIndex(units) {
  units = normalize(units, 'ms');
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
    forIn(num, function (val, key) {
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

function isLeapYear (date) {
  var year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var arr2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function daysInYear (date) {
  return isLeapYear(date) ? arr2 : arr;
}

function isUndefined (value) {
  return typeof value === 'undefined';
}

function dayOfYear (date, val) {
  var arr = daysInYear(date);
  var month = date.getMonth();
  var count = 0;
  forNumber(month, function (i) {
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
  return daysInYear(date)[date.getMonth()];
}

var ASP_NET_JSON_REGEX = /^\/?Date\((-?\d+)/i;

var BASIC_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var DATES_REGEX = [
  ['YYYY-MM-DD', /(\d{4})-(\d\d)-(\d\d)/],
  ['YYYY-MM', /(\d{4})-(\d\d)/, false],
  // ['MM/DD/YYYY', /(\d\d)\/(\d\d)\/(\d{4})/],
  ['YYYYMMDD', /(\d{4})(\d\d)(\d\d)/],
  ['YYYYMM', /(\d{4})(\d\d)/, false],
  ['YYYY', /\d{4}/, false]
];

var EXTENDED_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

// export const COMPAT_NON_ISO_REGEX = /^\s*((?:\d\d[-/]\d\d|W\d\d[-/]\d|W\d\d|\d\d\d|\d\d)[-/](?:\d{6}|\d{4}))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;

var TIMES_REGEX = [
  ['HH:mm:ss.SSSS', /(\d\d):(\d\d):(\d\d)\.(\d+)/],
  ['HH:mm:ss,SSSS', /(\d\d):(\d\d):(\d\d),(\d+)/],
  ['HH:mm:ss', /(\d\d):(\d\d):(\d\d)/],
  ['HH:mm', /(\d\d):(\d\d)/],
  ['HHmmss.SSSS', /(\d\d)(\d\d)(\d\d)\.(\d+)/],
  ['HHmmss,SSSS', /(\d\d)(\d\d)(\d\d),(\d+)/],
  ['HHmmss', /(\d\d)(\d\d)(\d\d)/],
  ['HHmm', /(\d\d)(\d\d)/],
  ['HH', /\d\d/]
];

var TZ_REGEX = /(Z)|[+-](\d\d)(?::?(\d\d))?/;

var TIMEZONE_OFFSET = (new Date()).getTimezoneOffset();

var toString = Object.prototype.toString;

function toString$1 (value) {
  return toString.call(value);
}

function isDate (value) {
  return toString$1(value) === '[object Date]';
}

/**
 * 智能提取年月日时分秒
 * @param {String} input 时间字符串
 */
function extractFrom(input) {
  var allowTime, matches;
  var dateArr = [];
  var match = EXTENDED_ISO_REGEX.exec(input) || BASIC_ISO_REGEX.exec(input);
  if (match) {
    // 解析YYYY-MM-DD
    forEach(DATES_REGEX, function (item, i) {
      if ((matches = item[1].exec(match[1]))) {
        forNumber(3, function (i) {
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
      forEach(TIMES_REGEX, function (item) {
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
      matches = TZ_REGEX.exec(match[4]);
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
    if (input.length === 4 && DATES_REGEX[4][1].test(input)) {
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
  forNumber(len, function (i) {
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
    if ((matches = TZ_REGEX.exec(input.slice(format.indexOf('ZZ') > -1 ? -5 : -6)))) {
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
  var matched = ASP_NET_JSON_REGEX.exec(input);
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

  if (b < anchor) {
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
  units = normalize(units);

  switch (units) {
    case 'Y':
      output = monthDiff(date, input) / 12;
      break;
    case 'M':
      output = monthDiff(date, input);
      break;
    case 's':
      output = (date - input) / 1000;
      break;
    case 'm':
      output = (date - input) / 60000;
      break;
    case 'h':
      output = (date - input) / 3600000;
      break;
    // case 'D':
    case 'd':
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}

function startOf (date, units) {
  units = normalize(units);
  switch (units) {
    case 'Y':
      date.setMonth(0);
    /* falls through */
    case 'M':
      date.setDate(1);
    /* falls through */
    case 'D':
    case 'd':
      date.setHours(0);
    /* falls through */
    case 'h':
      date.setMinutes(0);
    /* falls through */
    case 'm':
      date.setSeconds(0);
    /* falls through */
    case 's':
      date.setMilliseconds(0);
  }

  return date;
}

function endOf (date, units) {
  units = normalize(units, 'ms');
  if (units === 'ms') {
    return date;
  }
  startOf(date, units);
  add(date, 1, units);
  add(date, -1, 'ms');
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
  if (!inputString || inputString === 'UTC') {
    return date.toISOString();
  }
  return inputString.replace(FORMAT_REGEX, function (matched) {
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
        return timezone(TIMEZONE_OFFSET);
      case 'ZZ':
        return timezone(TIMEZONE_OFFSET, true);
      default:
        return matched;
    }
  });
}

function get (date, unit) {
  unit = normalize(unit, 't');
  return fns[unit](date);
}

function compare (date, input, units, type) {
  input = parse(input);
  units = normalize(units, 'ms');
  if (units === 'ms') {
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

function set (date, unit, val) {
  unit = normalize(unit, 'ms');
  return fns[unit](date, val);
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
  get: get,
  isAfter: isAfter,
  isBefore: isBefore,
  isBetween: isBetween,
  isLeapYear: isLeapYear,
  isSame: isSame,
  isSameOrAfter: isSameOrAfter,
  isSameOrBefore: isSameOrBefore,
  isValid: isValid,
  parse: parse,
  set: set,
  startOf: startOf,
  subtract: subtract
};

function forIn$1 (value, iterator, context) {
  return value && forIn(value, iterator, context);
}

function forNumber$1 (value, iterator, context) {
  return value && forNumber(value, iterator, context);
}

function isAsyncFunction (value) {
  return toString$1(value) === '[object AsyncFunction]';
}

function isBoolean (value) {
  return typeof value === 'boolean';
}

function isPromiseLike (value) {
  return !!value && isFunction(value.then);
}

function sleep (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

var RAW_DATA_TYPES = {};
'Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol'.split(',').forEach(function (name) {
  RAW_DATA_TYPES[("[object " + name + "]")] = name.toLowerCase();
});

function type (value) {
  if (isNil(value)) {
    return value + '';
  }
  return (isObject(value) || isFunction(value)) ? (RAW_DATA_TYPES[toString$1(value)] || 'object') : typeof value;
}

var index = {
  array: array,
  camelCase: camelCase,
  date: date,
  each: each,
  forEach: forEach$1,
  forIn: forIn$1,
  forNumber: forNumber$1,
  isArrayLike: isArrayLike,
  isAsyncFunction: isAsyncFunction,
  isBoolean: isBoolean,
  isDate: isDate,
  isFunction: isFunction,
  isNil: isNil,
  isNumber: isNumber,
  isObject: isObject,
  isPromiseLike: isPromiseLike,
  isString: isString,
  isUndefined: isUndefined,
  sleep: sleep,
  type: type
};

export default index;
