/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function grep (elems, callback, invert) {
  var matches = [];
  var i = 0;
  var length = elems.length;
  var isOpposite = !invert; // 是否取反向结果

  for (; i < length; i++) {
    if (!callback(elems[i], i) !== isOpposite) {
      matches.push(elems[i]);
    }
  }
  return matches;
}

module.exports = grep;
