/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-24292794.js"),__chunk_2=require("./chunk-cf63cef7.js");function forIn(r,n,_){var c=__chunk_1.iteratorCallback(n,_);for(var u in r)if(!1===c(r[u],u,r))break}function forNumber(r,n,_){for(var c=__chunk_1.iteratorCallback(n,_),u=0,a=void 0;!1!==a&&u<r;u++)a=c(u,u,u)}function each(r,n,_){r&&(__chunk_2.isArrayLike(r)?__chunk_1.forEach(r,n,_):__chunk_2.isNumber(r)?forNumber(r,n,_):forIn(r,n,_))}function append(r,n){r[r.length]=n}function map(r,n,_){var c=[],u=__chunk_1.iteratorCallback(n,_);return each(r,function(r){r=u(r),__chunk_2.isNil(r)||append(c,r)}),c}module.exports=map;
