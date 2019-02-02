/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-77777e75.js');

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
  return inputString.replace(__chunk_1.FORMAT_REGEX, function (matched) {
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

exports.default = format;
