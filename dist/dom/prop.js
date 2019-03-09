/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-619deb81.js");require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js"),__chunk_13=require("./chunk-13089cd6.js");function getProperty(r,e){return(r=__chunk_6.firstNode(r))&&r[e]}function setProperty(r,e,n){return e=__chunk_4.propFix[e]||e,__chunk_6.checkDom(r,function(r){r[e]=n}),r}function prop(r,e,n){return __chunk_13.isUndefined(n)?getProperty(r,e):setProperty(r,e,n)}module.exports=prop;
