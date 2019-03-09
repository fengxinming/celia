/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var UNITS={},setter=function(e,t){UNITS[e]=UNITS[e.slice(0,-1)]=UNITS[t]=t};function normalizeUnit(e,t){return UNITS[e]||t}setter("years","Y"),setter("months","M"),setter("dates","D"),setter("days","d"),setter("hours","h"),setter("minutes","m"),setter("seconds","s"),setter("milliseconds","ms"),exports.normalizeUnit=normalizeUnit;
