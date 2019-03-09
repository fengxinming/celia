/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-0cb3fc16.js");var add=require("./add.js");require("./chunk-5ac2012c.js");var __chunk_3=require("./chunk-6fce3905.js"),clone=require("./clone.js");require("./chunk-a0229133.js"),require("./chunk-fbabc482.js");var parse=require("./parse.js");function monthDiff(e,r){var a=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),a,"months");return-(a+(r<n?(r-n)/(n-add(clone(e),a-1,"months")):(r-n)/(add(clone(e),a+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,a,n){var c;switch(r=parse(r),a=__chunk_3.normalizeUnit(a)){case"Y":c=monthDiff(e,r)/12;break;case"M":c=monthDiff(e,r);break;case"s":c=(e-r)/1e3;break;case"m":c=(e-r)/6e4;break;case"h":c=(e-r)/36e5;break;case"d":c=(e-r)/864e5;break;default:c=e-r}return n?c:absFloor(c)}module.exports=diff;
