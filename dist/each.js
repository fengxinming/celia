/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-61629928.js");var __chunk_3=require("./chunk-da7c3887.js");require("./isNil.js"),require("./isFunction.js");var isNumber=require("./isNumber.js"),isArrayLike=require("./isArrayLike.js"),__chunk_4=require("./chunk-1771d82b.js"),__chunk_5=require("./chunk-8682876b.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_3.forEach(r,e,u):isNumber(r)?__chunk_5.forNumber(r,e,u):__chunk_4.forIn(r,e,u))}module.exports=each;
