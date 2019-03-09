/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_5=require("./chunk-7ad506f8.js"),__chunk_6=require("./chunk-cf5dc476.js");require("./chunk-13089cd6.js");var __chunk_16=require("./chunk-f2d48995.js");function removeData(e){for(var r=[],n=arguments.length-1;0<n--;)r[n]=arguments[n+1];var c=r[0]?function(e){var n=__chunk_16.expandoStore(e,"data");n&&__chunk_5.forEach(r,function(e){delete n[e]})}:function(){__chunk_16.expandoStore(e,"data",{})};return __chunk_6.checkDom(e,c),e}module.exports=removeData;
