/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-ed2eb741.js"),__chunk_2=require("./chunk-b98f16c0.js"),__chunk_3=require("./chunk-63afe335.js");function forIn(r,n,_){var e=__chunk_1.newIterator(n,_);for(var u in r)if(!1===e(r[u],u,r))break}function forNumber(r,n,_){for(var e=__chunk_1.newIterator(n,_),u=0,c=void 0;!1!==c&&u<r;u++)c=e(u,u,u)}function each(r,n,_){r&&(__chunk_3.isArrayLike(r)?__chunk_1.forEach(r,n,_):__chunk_2.isNumber(r)?forNumber(r,n,_):forIn(r,n,_))}function map(r,n,_){var e=[],u=__chunk_1.newIterator(n,_);return each(r,function(r){r=u(r),__chunk_3.isNil(r)||(e[e.length]=r)}),e}module.exports=map;
