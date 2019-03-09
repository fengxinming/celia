/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-0cb3fc16.js"),require("./add.js"),require("./chunk-5ac2012c.js"),require("./chunk-6fce3905.js"),require("./clone.js"),require("./chunk-a0229133.js"),require("./chunk-fbabc482.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-7073ab4e.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
