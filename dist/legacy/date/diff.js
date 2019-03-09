/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-1975bbb1.js");var add=require("./add.js");require("./chunk-27959177.js");var __chunk_3=require("./chunk-d2dca2a0.js"),clone=require("./clone.js");require("./chunk-bbdf02a0.js"),require("./chunk-3090b5b5.js");var parse=require("./parse.js");function monthDiff(e,r){var a=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),a,"months");return-(a+(r<n?(r-n)/(n-add(clone(e),a-1,"months")):(r-n)/(add(clone(e),a+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,a,n){var s;switch(r=parse(r),a=__chunk_3.normalizeUnit(a)){case"Y":s=monthDiff(e,r)/12;break;case"M":s=monthDiff(e,r);break;case"s":s=(e-r)/1e3;break;case"m":s=(e-r)/6e4;break;case"h":s=(e-r)/36e5;break;case"d":s=(e-r)/864e5;break;default:s=e-r}return n?s:absFloor(s)}module.exports=diff;
