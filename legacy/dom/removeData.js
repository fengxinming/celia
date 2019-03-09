/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_5=require("./chunk-24292794.js"),__chunk_6=require("./chunk-ccb7a15b.js");require("./chunk-2b061e9c.js");var __chunk_16=require("./chunk-6597c236.js");function removeData(e){for(var n=[],c=arguments.length-1;0<c--;)n[c]=arguments[c+1];var r=n[0]?function(e){var c=__chunk_16.expandoStore(e,"data");c&&__chunk_5.forEach(n,function(e){delete c[e]})}:function(){__chunk_16.expandoStore(e,"data",{})};return __chunk_6.checkDom(e,r),e}module.exports=removeData;
