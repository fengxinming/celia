/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ad3cda5b.js");var __chunk_3=require("./chunk-b31a7b58.js"),__chunk_5=require("./chunk-9058df49.js");function isObject(n){return!__chunk_3.isNil(n)&&"object"==typeof n}function data(n,e,_){var u=__chunk_5.expandoStore(n,"data"),c=!__chunk_5.isUndefined(_),r=!c&&!__chunk_5.isUndefined(e),t=r&&!isObject(e);if(u||t||__chunk_5.expandoStore(n,"data",u={}),c)u[e]=_;else{if(!r)return u;if(t)return u&&u[e];__chunk_3.forIn(e,function(n,e){u[e]=n})}}module.exports=data;
