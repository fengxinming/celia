/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var isNil = require('./isNil.js');
require('./isFunction.js');
require('./isArrayLike.js');
require('./isNumber.js');
require('./isLeapYear.js');
var __chunk_2 = require('./chunk-63c0b947.js');
require('./chunk-62d1d729.js');
require('./chunk-381503a2.js');
require('./chunk-a96faef0.js');
var each = require('./each.js');

function map (elems, callback, context) {
  var ret = [];
  var cb = __chunk_2.newIterator(callback, context);
  each.default(elems, function (elem) {
    elem = cb(elem);
    if (!isNil.default(elem)) {
      ret[ret.length] = elem;
    }
  });
  return ret;
}

exports.default = map;
