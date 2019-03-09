/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-4e3c1e04.js");require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_8=require("./chunk-2723b541.js"),__chunk_13=require("./chunk-2b061e9c.js"),__chunk_15=require("./chunk-fde033f8.js"),DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,r){return r.toUpperCase()})}var cssProps={};function style(e,r,c){var n=e.style;if(r=cssProps[r]||(cssProps[r]=__chunk_4.vendorPropName(r)||r),__chunk_8.isNil(c))return n[r];n[r]=c}function getter(e,r){return(e=__chunk_6.firstNode(e))?__chunk_15.curCSS(e,r):""}function setter(e,r,c){return __chunk_6.checkDom(e,function(e){style(e,r,c)}),e}function css(e,r,c){return r=camelCase(r),__chunk_13.isUndefined(c)?getter(e,r):setter(e,r,c)}module.exports=css;
