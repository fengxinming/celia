/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-77777e75.js');
require('./isNil.js');
require('./isNumber.js');
require('./isLeapYear.js');
require('./chunk-63c0b947.js');
require('./chunk-62d1d729.js');
require('./chunk-381503a2.js');
require('./chunk-a96faef0.js');
require('./isDate.js');
require('./isObject.js');
require('./isString.js');
require('./isUndefined.js');
require('./chunk-cf5c46b9.js');
require('./chunk-0e93d1f3.js');
require('./add.js');
require('./clone.js');
require('./parse.js');
require('./startOf.js');
require('./endOf.js');
require('./chunk-95ba2dc7.js');
var isAfter = require('./isAfter.js');
var isBefore = require('./isBefore.js');

function isBetween (date, from, to, units, inclusivity) {
  inclusivity = inclusivity || '()';
  return (inclusivity.charAt(0) === '(' ? isAfter.default(date, from, units) : !isBefore.default(date, from, units)) &&
    (inclusivity.charAt(1) === ')' ? isBefore.default(date, to, units) : !isAfter.default(date, to, units));
}

exports.default = isBetween;
