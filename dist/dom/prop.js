/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-c4f6194a.js");require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js"),__chunk_13=require("./chunk-132a4ff9.js");function getProperty(r,e){return(r=__chunk_6.firstNode(r))&&r[e]}function setProperty(r,e,n){return e=__chunk_4.propFix[e]||e,__chunk_6.checkDom(r,function(r){r[e]=n}),r}function prop(r,e,n){return __chunk_13.isUndefined(n)?getProperty(r,e):setProperty(r,e,n)}module.exports=prop;
