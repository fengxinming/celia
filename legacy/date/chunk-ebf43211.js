/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isLeapYear=require("./isLeapYear.js"),arr=[31,28,31,30,31,30,31,31,30,31,30,31],arr2=[31,29,31,30,31,30,31,31,30,31,30,31];function daysInYear(r){return isLeapYear(r)?arr2:arr}exports.daysInYear=daysInYear;
