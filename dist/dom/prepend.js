/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-9356120a.js"),require("./chunk-476cbb18.js"),require("./chunk-8ffc9b80.js");var __chunk_4=require("./chunk-0807035c.js");function prepend(e){for(var r=[],n=arguments.length-1;0<n--;)r[n]=arguments[n+1];return __chunk_4.domManip(e,r,"prepend",function(e,r){1!==e.nodeType&&11!==e.nodeType&&9!==e.nodeType||e.insertBefore(r,e.firstChild)})}module.exports=prepend;
