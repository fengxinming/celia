/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var join=require("./join.js"),__chunk_2=require("./chunk-cf63cef7.js");function isString(r){return"string"==typeof r}var ref=Array.prototype,push=ref.push;function makeArray(r,e){var u=e||[];return r&&(__chunk_2.isArrayLike(Object(r))?join(u,isString(r)?[r]:r):u.push?u.push(r):push.call(u,r)),u}module.exports=makeArray;
