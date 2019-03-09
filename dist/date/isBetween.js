/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-1975bbb1.js"),require("./add.js"),require("./chunk-27959177.js"),require("./chunk-d2dca2a0.js"),require("./clone.js"),require("./chunk-bbdf02a0.js"),require("./chunk-3090b5b5.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-935c9982.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
