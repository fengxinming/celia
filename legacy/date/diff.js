/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-57c66484.js");var add=require("./add.js");require("./isLeapYear.js"),require("./chunk-3a6d201e.js");var __chunk_3=require("./chunk-1a10349c.js");require("./chunk-e454aef8.js");var clone=require("./clone.js");require("./chunk-deaeaac8.js"),require("./chunk-4704adee.js");var parse=require("./parse.js");function monthDiff(e,r){var a=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),a,"months");return-(a+(r-n<0?(r-n)/(n-add(clone(e),a-1,"months")):(r-n)/(add(clone(e),a+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,a,n){var u;switch(r=parse(r),a=__chunk_3.normalizeUnit(a)){case __chunk_3.YEAR:u=monthDiff(e,r)/12;break;case __chunk_3.MONTH:u=monthDiff(e,r);break;case __chunk_3.SECOND:u=(e-r)/1e3;break;case __chunk_3.MINUTE:u=(e-r)/6e4;break;case __chunk_3.HOUR:u=(e-r)/36e5;break;case __chunk_3.DAY:u=(e-r)/864e5;break;default:u=e-r}return n?u:absFloor(u)}module.exports=diff;
