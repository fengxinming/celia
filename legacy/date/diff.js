/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-4bf012c8.js");var add=require("./add.js");require("./chunk-61629928.js");var __chunk_3=require("./chunk-c4e40a00.js"),clone=require("./clone.js");require("./chunk-8682876b.js"),require("./chunk-8c17337b.js");var parse=require("./parse.js");function monthDiff(e,r){var a=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),a,"months");return-(a+(r<n?(r-n)/(n-add(clone(e),a-1,"months")):(r-n)/(add(clone(e),a+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,a,n){var c;switch(r=parse(r),a=__chunk_3.normalizeUnit(a)){case"Y":c=monthDiff(e,r)/12;break;case"M":c=monthDiff(e,r);break;case"s":c=(e-r)/1e3;break;case"m":c=(e-r)/6e4;break;case"h":c=(e-r)/36e5;break;case"d":c=(e-r)/864e5;break;default:c=e-r}return n?c:absFloor(c)}module.exports=diff;
