/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-006b22f6.js');
require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a10f6a8.js');
require('./chunk-e81b0eeb.js');
require('./chunk-1535a567.js');
require('./clone.js');
require('./chunk-e9478a8f.js');
require('./chunk-404b929f.js');
require('./chunk-68e6a317.js');
require('./parse.js');
require('./startOf.js');
require('./endOf.js');
require('./chunk-3da8d3e8.js');
var isAfter = require('./isAfter.js');
var isBefore = require('./isBefore.js');

function isBetween (date, from, to, units, inclusivity) {
  inclusivity = inclusivity || '()';
  return (inclusivity.charAt(0) === '(' ? isAfter(date, from, units) : !isBefore(date, from, units)) &&
    (inclusivity.charAt(1) === ')' ? isBefore(date, to, units) : !isAfter(date, to, units));
}

module.exports = isBetween;
