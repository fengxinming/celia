/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var inArray = require('./inArray.js');

function includes (elems, value) {
  return inArray(value, elems) !== -1;
}

module.exports = includes;