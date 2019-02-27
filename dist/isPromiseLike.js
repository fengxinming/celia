/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isFunction=require("./isFunction.js");function isPromiseLike(i){return!!i&&isFunction(i.then)}module.exports=isPromiseLike;
