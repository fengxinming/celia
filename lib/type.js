'use strict';

const toString = Object.prototype.toString;

const isArray = Array.isArray;

const RAW_DATA_TYPES = {};
['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'].forEach(name => {
  RAW_DATA_TYPES[`[object ${name}]`] = name.toLowerCase();
});

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isUndefinedOrNull(value) {
  return typeof value === 'undefined' || value === null;
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isNumeric(value) {
  return (isNumber(value) || isString(value)) && !isNaN(value - parseFloat(value));
}

function isDate(value) {
  return toString.call(value) === '[object Date]';
}

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

function isWindow(obj) {
  return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}

function isFile(obj) {
  return toString.call(obj) === '[object File]';
}

function isBlob(obj) {
  return toString.call(obj) === '[object Blob]';
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isFunction(value) {
  return typeof value === 'function';
}

function isPromiseLike(value) {
  return value && isFunction(value.then);
}

function isArrayLike(value) {
  if (isUndefinedOrNull(value) || isFunction(value) || isWindow(value)) {
    return false;
  }
  const length = value.length;
  return isArray(value) || length === 0 || isNumber(value) && length > 0 && (length - 1) in value;
}

function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }
  for (let name in value) {
    if (!isUndefined(name)) {
      return false;
    }
  }
  return true;
}

function isNodeName(elem, name) {
  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
}

function isNative(func) {
  return func && /native code/.test(func.toString());
}

function type(value) {
  if (isUndefinedOrNull(value)) {
    return value + '';
  }
  return isObject(value) || isFunction(value) ? RAW_DATA_TYPES[toString.call(value)] || 'object' : typeof value;
}

module.exports = {
  isUndefined,
  isUndefinedOrNull,
  isObject,
  isString,
  isNumber,
  isNumeric,
  isDate,
  isRegExp,
  isWindow,
  isFile,
  isBlob,
  isBoolean,
  isFunction,
  isArray,
  isPromiseLike,
  isArrayLike,
  isEmptyObject,
  isNodeName,
  isNative
};