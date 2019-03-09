/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-0cb3fc16.js");var add=require("./add.js");require("./chunk-5ac2012c.js");var __chunk_3=require("./chunk-6fce3905.js"),startOf=require("./startOf.js");function endOf(r,e){return"ms"===(e=__chunk_3.normalizeUnit(e,"ms"))||(startOf(r,e),add(r,1,e),add(r,-1,"ms")),r}module.exports=endOf;
