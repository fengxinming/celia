/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function isNil(r){return null==r}function parseArray(r,e){return e?new Date(Date.UTC(r[0],r[1]||0,isNil(r[2])?1:r[2],r[3]||0,r[4]||0,r[5]||0,r[6]||0)):new Date(r[0],r[1]||0,isNil(r[2])?1:r[2],r[3]||0,r[4]||0,r[5]||0,r[6]||0)}exports.isNil=isNil,exports.parseArray=parseArray;
