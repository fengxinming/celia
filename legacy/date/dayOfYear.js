/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-61629928.js"),require("./isLeapYear.js");var __chunk_4=require("./chunk-cf95ffdb.js"),__chunk_5=require("./chunk-8682876b.js");function isUndefined(e){return void 0===e}function dayOfYear(e,r){var n=__chunk_4.daysInYear(e),u=e.getMonth(),i=0;return __chunk_5.forNumber(u,function(e){i+=n[e]}),i+=e.getDate(),isUndefined(r)?i:(e.setTime(+e+864e5*(r-i)),e)}module.exports=dayOfYear;
