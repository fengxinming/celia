/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-78a5d470.js");var add=require("./add.js");require("./chunk-9356120a.js");var __chunk_3=require("./chunk-1af9fb56.js"),__chunk_4=require("./chunk-55ad1914.js"),startOf=require("./startOf.js");function endOf(r,e){return(e=__chunk_4.normalizeUnit(e))&&e!==__chunk_3.MILLISECOND&&(startOf(r,e),add(r,1,e),add(r,-1,__chunk_3.MILLISECOND)),r}module.exports=endOf;
