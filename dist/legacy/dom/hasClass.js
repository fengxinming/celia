/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-e37cb146.js"),require("./chunk-fc07047e.js");var __chunk_3=require("./chunk-abd355a9.js"),__chunk_5=require("./chunk-7ad506f8.js"),__chunk_6=require("./chunk-cf5dc476.js");function hasClass(r,s){var c=!1,u=__chunk_3.classesToArray(r.className);return __chunk_5.forEach(s,function(r){if(-1<u.indexOf(r))return!(c=!0)}),c}function hasClass$1(r,s){var c=!1,u=__chunk_3.classesToArray(s);return __chunk_6.checkDom(r,function(r){if(hasClass(r,u))return!(c=!0)}),c}module.exports=hasClass$1;
