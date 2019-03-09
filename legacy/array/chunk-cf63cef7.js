/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function isNil(i){return null==i}function isFunction(i){return"function"==typeof i}function isNumber(i){return"number"==typeof i}function isArrayLike(i){return!isNil(i)&&isNumber(i.length)&&!isFunction(i)}exports.isArrayLike=isArrayLike,exports.isNumber=isNumber,exports.isNil=isNil;
