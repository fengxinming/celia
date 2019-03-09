/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_8=require("./chunk-2723b541.js"),__chunk_10=require("./chunk-674f953c.js"),__chunk_13=require("./chunk-2b061e9c.js"),__chunk_16=require("./chunk-6597c236.js");function isObject(_){return!__chunk_8.isNil(_)&&"object"==typeof _}function data(n,e,c){if(isObject(e))return __chunk_6.checkDom(n,function(_){var c=__chunk_16.expandoStore(_,"data");c||__chunk_16.expandoStore(n,"data",c={}),__chunk_10.forIn(e,function(_,n){c[n]=_})}),n;if(__chunk_8.isNil(e))return(n=__chunk_6.firstNode(n))&&__chunk_16.expandoStore(n,"data");if(__chunk_13.isUndefined(c)){var _=__chunk_16.expandoStore(n,"data");return _&&_[e]}return __chunk_6.checkDom(n,function(_){var n=__chunk_16.expandoStore(_,"data");n||__chunk_16.expandoStore(_,"data",n={}),n[e]=c}),n}module.exports=data;
