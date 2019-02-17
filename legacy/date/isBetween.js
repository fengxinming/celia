/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-57c66484.js"),require("./add.js"),require("./isLeapYear.js"),require("./chunk-3a6d201e.js"),require("./chunk-1a10349c.js"),require("./chunk-e454aef8.js"),require("./clone.js"),require("./chunk-deaeaac8.js"),require("./chunk-e2de1293.js"),require("./chunk-4704adee.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-18bed11b.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
