/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-59a4e7e2.js"),require("./chunk-37a0aca0.js");var __chunk_3=require("./chunk-cae1bb77.js"),__chunk_5=require("./chunk-479d732e.js"),__chunk_6=require("./chunk-0a7dfc22.js");function hasClass(r,s){var u=!1,c=__chunk_3.classesToArray(r.className);return __chunk_5.forEach(s,function(r){if(-1<c.indexOf(r))return!(u=!0)}),u}function hasClass$1(r,s){var u=!1,c=__chunk_3.classesToArray(s);return __chunk_6.checkDom(r,function(r){if(hasClass(r,c))return!(u=!0)}),u}module.exports=hasClass$1;
