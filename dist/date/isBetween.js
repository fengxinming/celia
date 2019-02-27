/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-efa63cae.js"),require("./add.js"),require("./chunk-ad3cda5b.js"),require("./chunk-92d3ccdf.js"),require("./chunk-cd54bf0a.js"),require("./clone.js"),require("./chunk-da58865f.js"),require("./chunk-24d9c897.js"),require("./chunk-804c5eff.js"),require("./parse.js"),require("./startOf.js"),require("./endOf.js"),require("./chunk-ca1471ed.js");var isAfter=require("./isAfter.js"),isBefore=require("./isBefore.js");function isBetween(e,r,s,i,u){return("("===(u=u||"()").charAt(0)?isAfter(e,r,i):!isBefore(e,r,i))&&(")"===u.charAt(1)?isBefore(e,s,i):!isAfter(e,s,i))}module.exports=isBetween;
