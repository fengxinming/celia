/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-c4f6194a.js");require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js"),__chunk_8=require("./chunk-984e61d1.js"),__chunk_13=require("./chunk-132a4ff9.js"),__chunk_15=require("./chunk-1a25c08c.js"),DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,r){return r.toUpperCase()})}var cssProps={};function style(e,r,c){var n=e.style;if(r=cssProps[r]||(cssProps[r]=__chunk_4.vendorPropName(r)||r),__chunk_8.isNil(c))return n[r];n[r]=c}function getter(e,r){return(e=__chunk_6.firstNode(e))?__chunk_15.curCSS(e,r):""}function setter(e,r,c){return __chunk_6.checkDom(e,function(e){style(e,r,c)}),e}function css(e,r,c){return r=camelCase(r),__chunk_13.isUndefined(c)?getter(e,r):setter(e,r,c)}module.exports=css;
