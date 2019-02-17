/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./isLeapYear.js");var __chunk_2=require("./chunk-3a6d201e.js"),__chunk_5=require("./chunk-deaeaac8.js"),__chunk_6=require("./chunk-e2de1293.js");function dayOfYear(e,r){var u=__chunk_2.daysInYear(e),n=e.getMonth(),_=0;return __chunk_5.forNumber(n,function(e){_+=u[e]}),_+=e.getDate(),__chunk_6.isUndefined(r)?_:(e.setTime(+e+864e5*(r-_)),e)}module.exports=dayOfYear;
