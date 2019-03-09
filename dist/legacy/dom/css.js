/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-619deb81.js");require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js"),__chunk_8=require("./chunk-d577de8f.js"),__chunk_13=require("./chunk-13089cd6.js"),__chunk_15=require("./chunk-a84020f0.js"),DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,r){return r.toUpperCase()})}var cssProps={};function style(e,r,n){var c=e.style;if(r=cssProps[r]||(cssProps[r]=__chunk_4.vendorPropName(r)||r),__chunk_8.isNil(n))return c[r];c[r]=n}function getter(e,r){return(e=__chunk_6.firstNode(e))?__chunk_15.curCSS(e,r):""}function setter(e,r,n){return __chunk_6.checkDom(e,function(e){style(e,r,n)}),e}function css(e,r,n){return r=camelCase(r),__chunk_13.isUndefined(n)?getter(e,r):setter(e,r,n)}module.exports=css;
