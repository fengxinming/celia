/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isLeapYear=require("./isLeapYear.js"),toString=Object.prototype.toString;function newIterator(r,e){return e?r.bind(e):r}function getRawType(r){return toString.call(r)}var arr=[31,28,31,30,31,30,31,31,30,31,30,31],arr2=[31,29,31,30,31,30,31,31,30,31,30,31];function daysInYear(r){return isLeapYear(r)?arr2:arr}exports.newIterator=newIterator,exports.daysInYear=daysInYear,exports.getRawType=getRawType;
