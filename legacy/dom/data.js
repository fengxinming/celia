/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-9356120a.js");var __chunk_3=require("./chunk-8ffc9b80.js"),__chunk_5=require("./chunk-277e12b2.js");function isObject(e){return!__chunk_3.isNil(e)&&"object"==typeof e}function data(e,n,_){var u=__chunk_5.expandoStore(e,"data"),c=!__chunk_5.isUndefined(_),r=!c&&!__chunk_5.isUndefined(n),t=r&&!isObject(n);if(u||t||__chunk_5.expandoStore(e,"data",u={}),c)u[n]=_;else{if(!r)return u;if(t)return u&&u[n];__chunk_3.forIn(n,function(e,n){u[n]=e})}}module.exports=data;
