/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-27959177.js");var __chunk_3=require("./chunk-e62c25d8.js");require("./isNil.js"),require("./isFunction.js");var isNumber=require("./isNumber.js"),isArrayLike=require("./isArrayLike.js"),__chunk_4=require("./chunk-b1ebecac.js"),__chunk_5=require("./chunk-bbdf02a0.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_3.forEach(r,e,u):isNumber(r)?__chunk_5.forNumber(r,e,u):__chunk_4.forIn(r,e,u))}module.exports=each;
