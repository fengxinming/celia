/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-59a4e7e2.js"),require("./chunk-37a0aca0.js"),require("./chunk-c4f6194a.js"),require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js");require("./chunk-b5694aee.js");var __chunk_8=require("./chunk-984e61d1.js");require("./chunk-77b2f1ce.js"),require("./chunk-25fdb641.js"),require("./chunk-7eb269d7.js"),require("./chunk-f630e37c.js");var append=require("./append.js"),empty=require("./empty.js");function html(e,r){if(__chunk_8.isNil(r))return(e=__chunk_6.firstNode(e))&&e.innerHTML;var u=1===r.nodeType?function(e){empty(e),append(e,r)}:function(e){e.innerHTML=String(r)};return __chunk_6.checkDom(e,u),e}module.exports=html;
