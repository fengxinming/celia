/*!
 * celia.js v3.0.8
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function append (arr, obj) {
  arr[arr.length] = obj;
}

function append$1 (arr, obj) {
  if (arr) {
    append(arr, obj);
    return obj;
  }
}

function iteratorCallback (iterator, context) {
  return context ? iterator.bind(context) : iterator;
}

function forSlice (value, start, end, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var i = start, returnValue = (void 0); returnValue !== false && i < end; i++) {
    returnValue = cb(value[i], i, value);
  }
}

function forEach (value, iterator, context) {
  forSlice(value, 0, value.length, iterator, context);
}

function forEach$1 (value, iterator, context) {
  return value && forEach(value, iterator, context);
}

function grep (elems, callback, isOpposite) {
  var matches = [];
  isOpposite = !!isOpposite;
  forEach$1(elems, function (elem, i) {
    if (!callback(elem, i) === isOpposite) {
      append(matches, elem);
    }
  });
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

var isArray = Array.isArray;

function join (first, second) {
  var i = first.length;

  forEach$1(second, function (elem) {
    first[i++] = elem;
  });

  // 如果first是arrayLike, 那就需要手动更新长度
  if (!isArray(first)) {
    first.length = i;
  }

  return first;
}

function isNil (value) {
  /* eslint eqeqeq: 0 */
  return value == null;
}

function isFunction (value) {
  return typeof value === 'function';
}

function isNumber (value) {
  return typeof value === 'number';
}

function isArrayLike (value) {
  return !isNil(value) && isNumber(value.length) && !isFunction(value);
}

function isString (value) {
  return typeof value === 'string';
}

var ref = Array.prototype;
var push = ref.push;

function makeArray (arr, results) {
  var ret = results || [];
  if (arr) {
    if (isArrayLike(Object(arr))) {
      join(ret, isString(arr) ? [arr] : arr);
    } else {
      ret.push ? ret.push(arr) : push.call(ret, arr);
    }
  }
  return ret;
}

function forIn (value, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    }  }
}

function forNumber (value, iterator, context) {
  var cb = iteratorCallback(iterator, context);
  for (var i = 0, returnValue = (void 0); returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
}

function each (arr, cb, context) {
  if (arr) {
    if (isArrayLike(arr)) {
      forEach(arr, cb, context);
    } else if (isNumber(arr)) {
      forNumber(arr, cb, context);
    } else {
      forIn(arr, cb, context);
    }
  }
}

function map (elems, callback, context) {
  var ret = [];
  var cb = iteratorCallback(callback, context);
  each(elems, function (elem) {
    elem = cb(elem);
    if (!isNil(elem)) {
      append(ret, elem);
    }
  });
  return ret;
}

function removeAt (elems, index) {
  elems.splice(index, 1);
  return index;
}

function remove (elems, value) {
  var index = inArray(value, elems);
  if (index >= 0) {
    removeAt(elems, index);
    return value;
  }
  // 删除失败返回null
  return null;
}

function toArray (arrLike) {
  return arrLike && [].concat( arrLike );
  // return arrLike && slice.call(arrLike, 0);
}

var array = {
  append: append$1,
  forEach: forEach$1,
  grep: grep,
  inArray: inArray,
  includes: includes,
  join: join,
  makeArray: makeArray,
  map: map,
  remove: remove,
  removeAt: removeAt,
  toArray: toArray
};

module.exports = array;
