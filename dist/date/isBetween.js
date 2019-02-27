/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-78a5d470.js"),require("./add.js"),require("./chunk-9356120a.js"),require("./chunk-1af9fb56.js"),require("./chunk-55ad1914.js"),require("./clone.js"),require("./chunk-d25e655c.js"),require("./chunk-d01286bf.js"),require("./chunk-3705080c.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-2a4b214f.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
