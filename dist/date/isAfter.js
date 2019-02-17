/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-57c66484.js');
require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a6d201e.js');
require('./chunk-1a10349c.js');
require('./chunk-e454aef8.js');
require('./clone.js');
require('./chunk-deaeaac8.js');
require('./chunk-e2de1293.js');
require('./chunk-4704adee.js');
require('./parse.js');
require('./startOf.js');
require('./endOf.js');
var __chunk_8 = require('./chunk-18bed11b.js');

function isAfter (date, input, units) {
  return __chunk_8.compare(date, input, units, 'after');
}

module.exports = isAfter;
