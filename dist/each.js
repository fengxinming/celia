/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ad3cda5b.js");var __chunk_2=require("./chunk-1b8cb8e3.js");require("./isNil.js"),require("./isFunction.js");var isArrayLike=require("./isArrayLike.js"),isNumber=require("./isNumber.js"),__chunk_4=require("./chunk-39608e1a.js"),__chunk_5=require("./chunk-2edfe279.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_2.forEach(r,e,u):isNumber(r)?__chunk_5.forNumber(r,e,u):__chunk_4.forIn(r,e,u))}module.exports=each;
