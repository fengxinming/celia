'use strict';

const funcs = require('../_internal/func');
const types = require('./type');

const {
  objForEach,
  arrForEach,
  fnForEach,
  newIterator
} = funcs;
const {
  isArray,
  isArrayLike,
  isFunction,
  isNumber,
  isUndefined,
  isUndefinedOrNull,
  isString
} = types;
const {
  slice,
  indexOf,
  push
} = Array.prototype;

function forEach(value, iterator, context) {
  if (value) {
    if (isArray(value) || isArrayLike(value)) {
      return arrForEach(value, iterator, context);
    } else if (isFunction(value)) {
      return fnForEach(value, iterator, context);
    } else {
      return objForEach(value, iterator, context);
    }
  }
  return value;
}

function each(value, iterator, context) {
  if (value) {
    let length;
    let i = 0;
    const cb = newIterator(iterator, context);
    if (isArrayLike(value)) {
      length = value.length;
      for (; i < length; i++) {
        if (cb(i, value[i]) === false) {
          break;
        }
      }
    } else {
      for (i in value) {
        if (cb(i, value[i]) === false) {
          break;
        }
      }
    }
    return value;
  }
  return value;
}

function merge(first, second) {
  const len = +second.length;
  let j = 0;
  let i = first.length;
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

function makeArray(arr, results) {
  const ret = results || [];
  if (arr) {
    if (isArrayLike(Object(arr))) {
      merge(ret, isString(arr) ? [arr] : arr);
    } else {
      push.call(ret, arr);
    }
  }
  return ret;
}

function inArray(elem, arr, fromIndex) {
  if (arr) {
    if (arr.indexOf) {
      return arr.indexOf(elem, fromIndex);
    }
    if (indexOf) {
      return indexOf.call(arr, elem, fromIndex);
    }
    const len = arr.length;
    let i = fromIndex ? fromIndex < 0 ? Math.max(0, len + fromIndex) : fromIndex : 0;
    for (; i < len; i++) {
      if (i in arr && arr[i] === elem) {
        return i;
      }
    }
  }
  return -1;
}

function grep(elems, callback, invert) {
  let matches = [];
  let i = 0;
  const length = elems.length;
  const isOpposite = !!invert; // 是否取反向结果

  for (; i < length; i++) {
    if (callback(elems[i], i) !== isOpposite) {
      matches.push(elems[i]);
    }
  }
  return matches;
}

function map(elems, callback, arg) {
  let value;
  let i;
  const length = elems.length;
  const isArr = isArrayLike(elems);
  const ret = [];

  if (isArr) {
    for (i = 0; i < length; i++) {
      if (!isUndefinedOrNull(value = callback(elems[i], i, arg))) {
        ret[ret.length] = value;
      }
    }
  } else {
    for (i in elems) {
      if (!isUndefinedOrNull(value = callback(elems[i], i, arg))) {
        ret[ret.length] = value;
      }
    }
  }
  return ret;
}

function includes(elems, value) {
  return inArray(value, elems) !== -1;
}

function arrayRemove(elems, value) {
  let index = inArray(value, elems);
  if (index >= 0) {
    elems.splice(index, 1);
  }
  return value;
}

function toArray(arrLike) {
  return arrLike && [...arrLike];
  // return arrLike && slice.call(arrLike, 0);
}

module.exports = {
  forEach,
  each,
  merge,
  makeArray,
  inArray,
  grep,
  map,
  includes,
  arrayRemove,
  toArray,
};