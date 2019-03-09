/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_5=require("./chunk-479d732e.js"),__chunk_6=require("./chunk-0a7dfc22.js");require("./chunk-132a4ff9.js");var __chunk_16=require("./chunk-b8c23555.js");function removeData(e){for(var r=[],n=arguments.length-1;0<n--;)r[n]=arguments[n+1];var u=r[0]?function(e){var n=__chunk_16.expandoStore(e,"data");n&&__chunk_5.forEach(r,function(e){delete n[e]})}:function(){__chunk_16.expandoStore(e,"data",{})};return __chunk_6.checkDom(e,u),e}module.exports=removeData;
