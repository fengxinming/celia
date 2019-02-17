/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function inArray (elem, arr, fromIndex) {
  if (arr) {
    if (arr.indexOf) {
      return arr.indexOf(elem, fromIndex);
    }
    var len = arr.length;
    var i = fromIndex ? fromIndex < 0 ? Math.max(0, len + fromIndex) : fromIndex : 0;
    for (; i < len; i++) {
      if (i in arr && arr[i] === elem) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = inArray;
