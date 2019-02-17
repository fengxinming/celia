/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_2 = require('./chunk-13b5ab2d.js');

function isUndefined (value) {
  return typeof value === 'undefined';
}

function merge (first, second) {
  var len = +second.length;
  var j = 0;
  var i = first.length;
  // 处理ArrayLike,例如:NodeLists
  if (__chunk_2.isNumber(len)) {
    while (j < len) {
      first[i++] = second[j++];
    }
  } else {
    while (!isUndefined(second[j])) {
      first[i++] = second[j++];
    }
  }
  first.length = i;
  return first;
}

module.exports = merge;
