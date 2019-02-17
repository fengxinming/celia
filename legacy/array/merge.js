/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_2=require("./chunk-b98f16c0.js");function isUndefined(e){return void 0===e}function merge(e,n){var r=+n.length,i=0,u=e.length;if(__chunk_2.isNumber(r))for(;i<r;)e[u++]=n[i++];else for(;!isUndefined(n[i]);)e[u++]=n[i++];return e.length=u,e}module.exports=merge;
