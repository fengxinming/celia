/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-78a5d470.js");var add=require("./add.js");require("./chunk-9356120a.js");var __chunk_3=require("./chunk-1af9fb56.js"),__chunk_4=require("./chunk-55ad1914.js"),clone=require("./clone.js");require("./chunk-d25e655c.js"),require("./chunk-3705080c.js");var parse=require("./parse.js");function monthDiff(e,r){var n=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),a=add(clone(e),n,"months");return-(n+(r-a<0?(r-a)/(a-add(clone(e),n-1,"months")):(r-a)/(add(clone(e),n+1,"months")-a)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,n,a){var u;switch(r=parse(r),n=__chunk_4.normalizeUnit(n)){case __chunk_3.YEAR:u=monthDiff(e,r)/12;break;case __chunk_3.MONTH:u=monthDiff(e,r);break;case __chunk_3.SECOND:u=(e-r)/1e3;break;case __chunk_3.MINUTE:u=(e-r)/6e4;break;case __chunk_3.HOUR:u=(e-r)/36e5;break;case __chunk_3.DAY:u=(e-r)/864e5;break;default:u=e-r}return a?u:absFloor(u)}module.exports=diff;
