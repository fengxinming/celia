/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_4=require("./chunk-4e3c1e04.js");require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_13=require("./chunk-2b061e9c.js");function getProperty(r,e){return(r=__chunk_6.firstNode(r))&&r[e]}function setProperty(r,e,n){return e=__chunk_4.propFix[e]||e,__chunk_6.checkDom(r,function(r){r[e]=n}),r}function prop(r,e,n){return __chunk_13.isUndefined(n)?getProperty(r,e):setProperty(r,e,n)}module.exports=prop;
