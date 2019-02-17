/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var inArray = require('./inArray.js');

function remove (elems, value) {
  var index = inArray(value, elems);
  if (index >= 0) {
    elems.splice(index, 1);
  }
  return value;
}

module.exports = remove;
