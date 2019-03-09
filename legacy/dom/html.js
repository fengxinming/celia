/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ee0a2fc7.js"),require("./chunk-b17e0ab6.js"),require("./chunk-4e3c1e04.js"),require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js");require("./chunk-45cbd768.js");var __chunk_8=require("./chunk-2723b541.js");require("./chunk-b7e72449.js"),require("./chunk-674f953c.js"),require("./chunk-b84b8875.js"),require("./chunk-8dd5cece.js");var append=require("./append.js"),empty=require("./empty.js");function html(e,r){if(__chunk_8.isNil(r))return(e=__chunk_6.firstNode(e))&&e.innerHTML;var u=1===r.nodeType?function(e){empty(e),append(e,r)}:function(e){e.innerHTML=String(r)};return __chunk_6.checkDom(e,u),e}module.exports=html;
