/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-6fce3905.js");function startOf(s,e){switch(e=__chunk_3.normalizeUnit(e)){case"Y":s.setMonth(0);case"M":s.setDate(1);case"D":case"d":s.setHours(0);case"h":s.setMinutes(0);case"m":s.setSeconds(0);case"s":s.setMilliseconds(0)}return s}module.exports=startOf;
