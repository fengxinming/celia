/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-affeec6f.js"),__chunk_2=require("./chunk-d2185656.js");function isNumber(r){return"number"==typeof r}function forIn(r,n,u){var e=__chunk_1.iteratorCallback(n,u);for(var c in r)if(!1===e(r[c],c,r))break}function forNumber(r,n,u){for(var e=__chunk_1.iteratorCallback(n,u),c=0,a=void 0;!1!==a&&c<r;c++)a=e(c,c,c)}function each(r,n,u){r&&(__chunk_2.isArrayLike(r)?__chunk_1.forEach(r,n,u):isNumber(r)?forNumber(r,n,u):forIn(r,n,u))}function append(r,n){return r[r.length]=n}function map(r,n,u){var e=[],c=__chunk_1.iteratorCallback(n,u);return each(r,function(r){r=c(r),__chunk_2.isNil(r)||append(e,r)}),e}module.exports=map;
