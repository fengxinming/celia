/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_13=require("./chunk-2b061e9c.js");function getAttribute(t,e){return(t=__chunk_6.firstNode(t))&&t.getAttribute(e)}function setAttribute(t,e,u){return __chunk_6.checkDom(t,function(t){t.setAttribute(e,u)}),t}function attr(t,e,u){return __chunk_13.isUndefined(u)?getAttribute(t,e):setAttribute(t,e,u)}module.exports=attr;
