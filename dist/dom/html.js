/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-e37cb146.js"),require("./chunk-fc07047e.js"),require("./chunk-619deb81.js"),require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js");require("./chunk-56b022d1.js");var __chunk_8=require("./chunk-d577de8f.js");require("./chunk-0d387eab.js"),require("./chunk-f2d50846.js"),require("./chunk-8a200498.js"),require("./chunk-baef53ec.js");var append=require("./append.js"),empty=require("./empty.js");function html(e,r){if(__chunk_8.isNil(r))return(e=__chunk_6.firstNode(e))&&e.innerHTML;var u=1===r.nodeType?function(e){empty(e),append(e,r)}:function(e){e.innerHTML=String(r)};return __chunk_6.checkDom(e,u),e}module.exports=html;
