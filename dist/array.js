/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var __chunk_1 = require('./chunk-f7046d4d.js');
var __chunk_2 = require('./chunk-45a38186.js');
var isNumber = require('./isNumber.js');
var isUndefined = require('./isUndefined.js');
var isNil = require('./isNil.js');
require('./isFunction.js');
var isArrayLike = require('./isArrayLike.js');
var isString = require('./isString.js');
require('./chunk-5ca5f7da.js');
require('./chunk-a45738ca.js');
var each = require('./each.js');

function forEach (value, iterator, context) {
  return value && __chunk_2.forEach(value, iterator, context);
}

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

function includes (elems, value) {
  return inArray(value, elems) !== -1;
}

function merge (first, second) {
  var len = +second.length;
  var j = 0;
  var i = first.length;
  // 处理ArrayLike,例如:NodeLists
  if (isNumber(len)) {
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

var ref = Array.prototype;
var push = ref.push;

function makeArray (arr, results) {
  var ret = results || [];
  if (arr) {
    if (isArrayLike(Object(arr))) {
      merge(ret, isString(arr) ? [arr] : arr);
    } else {
      push.call(ret, arr);
    }
  }
  return ret;
}

function map (elems, callback, context) {
  var ret = [];
  var cb = __chunk_1.newIterator(callback, context);
  each(elems, function (elem) {
    elem = cb(elem);
    if (!isNil(elem)) {
      ret[ret.length] = elem;
    }
  });
  return ret;
}

function remove (elems, value) {
  var index = inArray(value, elems);
  if (index >= 0) {
    elems.splice(index, 1);
  }
  return value;
}

function toArray (arrLike) {
  return arrLike && [].concat( arrLike );
  // return arrLike && slice.call(arrLike, 0);
}

var array = {
  forEach: forEach,
  grep: grep,
  inArray: inArray,
  includes: includes,
  makeArray: makeArray,
  map: map,
  merge: merge,
  remove: remove,
  toArray: toArray
};

module.exports = array;
