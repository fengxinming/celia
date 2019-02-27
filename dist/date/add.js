/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-efa63cae.js"),__chunk_2=require("./chunk-ad3cda5b.js"),__chunk_3=require("./chunk-92d3ccdf.js"),__chunk_4=require("./chunk-cd54bf0a.js");function isObject(n){return!__chunk_1.isNil(n)&&"object"==typeof n}function forIn(n,e,_){var i=__chunk_2.iteratorCallback(e,_);for(var t in n)if(!1===i(n[t],t,n))break}var indexOfUnits={};function getIndex(n){return n=n?__chunk_4.normalizeUnit(n):__chunk_3.MILLISECOND,indexOfUnits[n]}function add(n,e,_){var i=[n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()];if(isObject(e))forIn(e,function(n,e){var _=getIndex(e);i[_]+=n});else{var t=getIndex(_);i[t]+=e}return n.setTime(+__chunk_1.parseArray(i)),n}indexOfUnits[__chunk_3.YEAR]=0,indexOfUnits[__chunk_3.MONTH]=1,indexOfUnits[__chunk_3.DAY]=2,indexOfUnits[__chunk_3.HOUR]=3,indexOfUnits[__chunk_3.MINUTE]=4,indexOfUnits[__chunk_3.SECOND]=5,indexOfUnits[__chunk_3.MILLISECOND]=6,module.exports=add;
