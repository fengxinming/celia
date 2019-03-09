/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js"),__chunk_8=require("./chunk-d577de8f.js"),__chunk_10=require("./chunk-f2d50846.js"),__chunk_13=require("./chunk-13089cd6.js"),__chunk_16=require("./chunk-f2d48995.js");function isObject(_){return!__chunk_8.isNil(_)&&"object"==typeof _}function data(n,u,e){if(isObject(u))return __chunk_6.checkDom(n,function(_){var e=__chunk_16.expandoStore(_,"data");e||__chunk_16.expandoStore(n,"data",e={}),__chunk_10.forIn(u,function(_,n){e[n]=_})}),n;if(__chunk_8.isNil(u))return(n=__chunk_6.firstNode(n))&&__chunk_16.expandoStore(n,"data");if(__chunk_13.isUndefined(e)){var _=__chunk_16.expandoStore(n,"data");return _&&_[u]}return __chunk_6.checkDom(n,function(_){var n=__chunk_16.expandoStore(_,"data");n||__chunk_16.expandoStore(_,"data",n={}),n[u]=e}),n}module.exports=data;
