/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_3=require("./chunk-1af9fb56.js"),UNITS={},setter=function(_){UNITS[_]=UNITS[_.slice(0,-1)]=UNITS[_.slice(0,1)]=_};function normalizeUnit(_){return __chunk_3.isString(_)?UNITS[_]:void 0}setter(__chunk_3.MILLISECOND),setter(__chunk_3.YEAR),setter(__chunk_3.MONTH),setter(__chunk_3.DATE),setter(__chunk_3.DAY),setter(__chunk_3.HOUR),setter(__chunk_3.MINUTE),setter(__chunk_3.SECOND),UNITS.M=__chunk_3.MONTH,UNITS.ms=__chunk_3.MILLISECOND,exports.normalizeUnit=normalizeUnit;
