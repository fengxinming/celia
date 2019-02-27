/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-9356120a.js");var __chunk_2=require("./chunk-476cbb18.js");require("./isNil.js"),require("./isFunction.js");var isArrayLike=require("./isArrayLike.js"),isNumber=require("./isNumber.js"),__chunk_4=require("./chunk-51105fff.js"),__chunk_5=require("./chunk-916aefa4.js");function each(r,e,u){r&&(isArrayLike(r)?__chunk_2.forEach(r,e,u):isNumber(r)?__chunk_5.forNumber(r,e,u):__chunk_4.forIn(r,e,u))}module.exports=each;
