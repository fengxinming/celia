/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-ed2eb741.js');
var __chunk_2 = require('./chunk-b98f16c0.js');
var __chunk_3 = require('./chunk-63afe335.js');

function forIn (value, iterator, context) {
  var cb = __chunk_1.newIterator(iterator, context);
  for (var key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    }  }
}

function forNumber (value, iterator, context) {
  var cb = __chunk_1.newIterator(iterator, context);
  for (var i = 0, returnValue = (void 0); returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
}

function each (arr, cb, context) {
  if (arr) {
    if (__chunk_3.isArrayLike(arr)) {
      __chunk_1.forEach(arr, cb, context);
    } else if (__chunk_2.isNumber(arr)) {
      forNumber(arr, cb, context);
    } else {
      forIn(arr, cb, context);
    }
  }
}

function map (elems, callback, context) {
  var ret = [];
  var cb = __chunk_1.newIterator(callback, context);
  each(elems, function (elem) {
    elem = cb(elem);
    if (!__chunk_3.isNil(elem)) {
      ret[ret.length] = elem;
    }
  });
  return ret;
}

module.exports = map;
