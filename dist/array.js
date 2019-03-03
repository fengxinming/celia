/*!
 * celia.js v3.0.0-beta.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.celia = factory());
}(this, function () { 'use strict';

  function append (arr, obj) {
    if (arr) {
      arr[arr.length] = obj;
    }
  }

  function iteratorCallback (iterator, context) {
    return context ? iterator.bind(context) : iterator;
  }

  function forEach (value, iterator, context) {
    var cb = iteratorCallback(iterator, context);
    for (var i = 0, len = value.length, returnValue = (void 0); returnValue !== false && i < len; i++) {
      returnValue = cb(value[i], i, value);
    }
  }

  function forEach$1 (value, iterator, context) {
    return value && forEach(value, iterator, context);
  }

  function grep (elems, callback, isOpposite) {
    var matches = [];
    if (elems) {
      var i = 0;
      var length = elems.length;
      isOpposite = !!isOpposite;

      for (; i < length; i++) {
        if (!callback(elems[i], i) === isOpposite) {
          matches[matches.length] = elems[i];
        }
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

  function join (first, second) {
    var len = +second.length;
    var i = first.length;

    for (var j = 0; j < len; j++) {
      first[i++] = second[j];
    }

    // 如果first是arrayLike, 那就需要手动更新长度
    first.length = i;

    return first;
  }

  function isNil (value) {
    /* eslint eqeqeq: 0 */
    return value == null;
  }

  function isFunction (value) {
    return typeof value === 'function';
  }

  var isArray = Array.isArray;

  function isArrayLike (value) {
    if (isNil(value) || isFunction(value)) {
      return false;
    }
    var length = value.length;
    return isArray(value) || length === 0 || (+length > 0 && (length - 1) in value);
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

  function isNumber (value) {
    return typeof value === 'number';
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

  function append$1 (arr, obj) {
    arr[arr.length] = obj;
  }

  function map (elems, callback, context) {
    var ret = [];
    var cb = iteratorCallback(callback, context);
    each(elems, function (elem) {
      elem = cb(elem);
      if (!isNil(elem)) {
        append$1(ret, elem);
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
    append: append,
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

  return array;

}));
