/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./isLeapYear.js');
var __chunk_2 = require('./chunk-3a6d201e.js');
var __chunk_5 = require('./chunk-deaeaac8.js');
var __chunk_6 = require('./chunk-e2de1293.js');

function dayOfYear (date, val) {
  var arr = __chunk_2.daysInYear(date);
  var month = date.getMonth();
  var count = 0;
  __chunk_5.forNumber(month, function (i) {
    count += arr[i];
  });
  count += date.getDate();
  if (__chunk_6.isUndefined(val)) {
    return count;
  } else {
    date.setTime(+date + ((val - count) * 86400000));
    return date;
  }
}

module.exports = dayOfYear;
