/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-006b22f6.js');
var add = require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a10f6a8.js');
require('./chunk-e81b0eeb.js');
require('./chunk-1535a567.js');

function subtract (date, num, unit) {
  return add(date, -num, unit);
}

module.exports = subtract;
