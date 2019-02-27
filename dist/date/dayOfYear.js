/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-9356120a.js"),require("./isLeapYear.js");var __chunk_5=require("./chunk-ebf43211.js"),__chunk_6=require("./chunk-d25e655c.js"),__chunk_7=require("./chunk-d01286bf.js");function dayOfYear(e,r){var u=__chunk_5.daysInYear(e),n=e.getMonth(),_=0;return __chunk_6.forNumber(n,function(e){_+=u[e]}),_+=e.getDate(),__chunk_7.isUndefined(r)?_:(e.setTime(+e+864e5*(r-_)),e)}module.exports=dayOfYear;
