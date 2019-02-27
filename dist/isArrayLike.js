/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isNil=require("./isNil.js"),isFunction=require("./isFunction.js"),isArray=Array.isArray;function isArrayLike(i){if(isNil(i)||isFunction(i))return!1;var r=i.length;return isArray(i)||0===r||0<+r&&r-1 in i}module.exports=isArrayLike;
