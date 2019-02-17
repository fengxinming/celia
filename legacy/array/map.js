/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-2b36440a.js"),__chunk_2=require("./chunk-13b5ab2d.js"),__chunk_3=require("./chunk-ad8d959f.js");function forIn(r,n,_){var u=__chunk_1.newIterator(n,_);for(var e in r)if(!1===u(r[e],e,r))break}function forNumber(r,n,_){for(var u=__chunk_1.newIterator(n,_),e=0,c=void 0;!1!==c&&e<r;e++)c=u(e,e,e)}function each(r,n,_){r&&(__chunk_3.isArrayLike(r)?__chunk_1.forEach(r,n,_):__chunk_2.isNumber(r)?forNumber(r,n,_):forIn(r,n,_))}function map(r,n,_){var u=[],e=__chunk_1.newIterator(n,_);return each(r,function(r){r=e(r),__chunk_3.isNil(r)||(u[u.length]=r)}),u}module.exports=map;
