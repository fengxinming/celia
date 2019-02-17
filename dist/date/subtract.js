/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

require('./chunk-57c66484.js');
var add = require('./add.js');
require('./isLeapYear.js');
require('./chunk-3a6d201e.js');
require('./chunk-1a10349c.js');
require('./chunk-e454aef8.js');

function subtract (date, num, unit) {
  return add(date, -num, unit);
}

module.exports = subtract;
