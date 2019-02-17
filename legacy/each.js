/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-bdd0d3b2.js");var __chunk_2=require("./chunk-5eff1713.js"),isNumber=require("./isNumber.js");require("./isNil.js"),require("./isFunction.js");var isArrayLike=require("./isArrayLike.js"),__chunk_3=require("./chunk-3e6acf32.js"),__chunk_4=require("./chunk-e79a056b.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_2.forEach(r,e,u):isNumber(r)?__chunk_4.forNumber(r,e,u):__chunk_3.forIn(r,e,u))}module.exports=each;
