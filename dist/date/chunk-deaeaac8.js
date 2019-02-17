/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_2 = require('./chunk-3a6d201e.js');

function forNumber (value, iterator, context) {
  var cb = __chunk_2.newIterator(iterator, context);
  for (var i = 0, returnValue = (void 0); returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
}

exports.forNumber = forNumber;
