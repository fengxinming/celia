/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-5ac2012c.js");var __chunk_3=require("./chunk-0e7911d6.js");require("./isNil.js"),require("./isFunction.js");var isNumber=require("./isNumber.js"),isArrayLike=require("./isArrayLike.js"),__chunk_4=require("./chunk-fcb4da67.js"),__chunk_5=require("./chunk-a0229133.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_3.forEach(r,e,u):isNumber(r)?__chunk_5.forNumber(r,e,u):__chunk_4.forIn(r,e,u))}module.exports=each;
