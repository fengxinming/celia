/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-006b22f6.js");require("./isLeapYear.js"),require("./chunk-3a10f6a8.js");var __chunk_3=require("./chunk-e81b0eeb.js");function isObject(e){return!__chunk_1.isNil(e)&&"object"==typeof e}require("./chunk-1535a567.js");var indexOfUnits={};function getIndex(e){return e=e?__chunk_3.normalizeUnit(e):__chunk_3.MILLISECOND,indexOfUnits[e]}function add(e,n,_){var i=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(isObject(n))__chunk_3.forIn(n,function(e,n){var _=getIndex(n);i[_]+=e});else{var t=getIndex(_);i[t]+=n}return e.setTime(+__chunk_1.parseArray(i)),e}indexOfUnits[__chunk_3.YEAR]=0,indexOfUnits[__chunk_3.MONTH]=1,indexOfUnits[__chunk_3.DAY]=2,indexOfUnits[__chunk_3.HOUR]=3,indexOfUnits[__chunk_3.MINUTE]=4,indexOfUnits[__chunk_3.SECOND]=5,indexOfUnits[__chunk_3.MILLISECOND]=6,module.exports=add;
