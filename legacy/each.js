/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-f7046d4d.js");var __chunk_2=require("./chunk-45a38186.js"),isNumber=require("./isNumber.js");require("./isNil.js"),require("./isFunction.js");var isArrayLike=require("./isArrayLike.js"),__chunk_3=require("./chunk-5ca5f7da.js"),__chunk_4=require("./chunk-a45738ca.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_2.forEach(r,e,u):isNumber(r)?__chunk_4.forNumber(r,e,u):__chunk_3.forIn(r,e,u))}module.exports=each;
