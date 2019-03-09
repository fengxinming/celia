/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-7ad506f8.js"),__chunk_2=require("./chunk-2a0959ac.js");function forIn(r,n,_){var a=__chunk_1.iteratorCallback(n,_);for(var c in r)if(!1===a(r[c],c,r))break}function forNumber(r,n,_){for(var a=__chunk_1.iteratorCallback(n,_),c=0,u=void 0;!1!==u&&c<r;c++)u=a(c,c,c)}function each(r,n,_){r&&(__chunk_2.isArrayLike(r)?__chunk_1.forEach(r,n,_):__chunk_2.isNumber(r)?forNumber(r,n,_):forIn(r,n,_))}function append(r,n){r[r.length]=n}function map(r,n,_){var a=[],c=__chunk_1.iteratorCallback(n,_);return each(r,function(r){r=c(r),__chunk_2.isNil(r)||append(a,r)}),a}module.exports=map;
