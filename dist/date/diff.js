/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-efa63cae.js");var add=require("./add.js");require("./chunk-ad3cda5b.js");var __chunk_3=require("./chunk-92d3ccdf.js"),__chunk_4=require("./chunk-cd54bf0a.js"),clone=require("./clone.js");require("./chunk-da58865f.js"),require("./chunk-804c5eff.js");var parse=require("./parse.js");function monthDiff(e,r){var a=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),a,"months");return-(a+(r-n<0?(r-n)/(n-add(clone(e),a-1,"months")):(r-n)/(add(clone(e),a+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,a,n){var c;switch(r=parse(r),a=__chunk_4.normalizeUnit(a)){case __chunk_3.YEAR:c=monthDiff(e,r)/12;break;case __chunk_3.MONTH:c=monthDiff(e,r);break;case __chunk_3.SECOND:c=(e-r)/1e3;break;case __chunk_3.MINUTE:c=(e-r)/6e4;break;case __chunk_3.HOUR:c=(e-r)/36e5;break;case __chunk_3.DAY:c=(e-r)/864e5;break;default:c=e-r}return n?c:absFloor(c)}module.exports=diff;
