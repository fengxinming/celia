/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_2=require("./chunk-3a6d201e.js"),__chunk_4=require("./chunk-e454aef8.js");function forIn(r,I,N){var e=__chunk_2.newIterator(I,N);for(var n in r)if(!1===e(r[n],n,r))break}var YEAR="years",MONTH="months",DATE="dates",DAY="days",HOUR="hours",MINUTE="minutes",SECOND="seconds",MILLISECOND="milliseconds",UNIT={YEAR:YEAR,MONTH:MONTH,DATE:DATE,DAY:DAY,HOUR:HOUR,MINUTE:MINUTE,SECOND:SECOND,MILLISECOND:MILLISECOND},UNITS={};function normalizeUnit(r){return __chunk_4.isString(r)?UNITS[r]:void 0}forIn(UNIT,function(r){UNITS[r]=UNITS[r.slice(0,-1)]=UNITS[r.slice(0,1)]=r}),UNITS.M=MONTH,UNITS.m=MINUTE,UNITS.ms=MILLISECOND,exports.forIn=forIn,exports.YEAR=YEAR,exports.MONTH=MONTH,exports.DAY=DAY,exports.HOUR=HOUR,exports.MINUTE=MINUTE,exports.SECOND=SECOND,exports.MILLISECOND=MILLISECOND,exports.normalizeUnit=normalizeUnit;
