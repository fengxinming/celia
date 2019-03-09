/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isNil=require("./isNil.js"),isFunction=require("./isFunction.js"),isNumber=require("./isNumber.js");function isArrayLike(i){return!isNil(i)&&isNumber(i.length)&&!isFunction(i)}module.exports=isArrayLike;
