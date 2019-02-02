/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
var __chunk_2 = require('./chunk-63c0b947.js');
var __chunk_5 = require('./chunk-a96faef0.js');
var isUndefined = require('./isUndefined.js');

function dayOfYear (date, val) {
  var arr = __chunk_2.daysInYear(date);
  var month = date.getMonth();
  var count = 0;
  __chunk_5.forNumber(month, function (i) {
    count += arr[i];
  });
  count += date.getDate();
  if (isUndefined.default(val)) {
    return count;
  } else {
    date.setTime(+date + ((val - count) * 86400000));
    return date;
  }
}

exports.default = dayOfYear;
