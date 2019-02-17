/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-bdd0d3b2.js');

function forEach (value, iterator, context) {
  var cb = __chunk_1.newIterator(iterator, context);
  for (var i = 0, len = value.length, returnValue = (void 0); returnValue !== false && i < len; i++) {
    returnValue = cb(value[i], i, value);
  }
}

exports.forEach = forEach;
