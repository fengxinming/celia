/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-4bf012c8.js"),require("./add.js"),require("./chunk-61629928.js"),require("./chunk-c4e40a00.js"),require("./clone.js"),require("./chunk-8682876b.js"),require("./chunk-8c17337b.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-49fed0ae.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
