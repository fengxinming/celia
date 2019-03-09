/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-479d732e.js"),__chunk_3=require("./chunk-b5694aee.js"),__chunk_4=require("./chunk-ca5471b6.js");function forIn(r,_,n){var u=__chunk_1.iteratorCallback(_,n);for(var c in r)if(!1===u(r[c],c,r))break}function forNumber(r,_,n){for(var u=__chunk_1.iteratorCallback(_,n),c=0,a=void 0;!1!==a&&c<r;c++)a=u(c,c,c)}function each(r,_,n){r&&(__chunk_4.isArrayLike(r)?__chunk_1.forEach(r,_,n):__chunk_4.isNumber(r)?forNumber(r,_,n):forIn(r,_,n))}function map(r,_,n){var u=[],c=__chunk_1.iteratorCallback(_,n);return each(r,function(r){r=c(r),__chunk_4.isNil(r)||__chunk_3.append(u,r)}),u}module.exports=map;
