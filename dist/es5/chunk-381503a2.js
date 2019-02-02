/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_2 = require('./chunk-63c0b947.js');

function forIn (value, iterator, context) {
  var cb = __chunk_2.newIterator(iterator, context);
  for (var key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    }  }
}

exports.forIn = forIn;
