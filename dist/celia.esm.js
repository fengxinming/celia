/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
var DASH_ALPHA_REGEX = /-([a-z])/g;

function camelCase (value) {
  return value.replace(DASH_ALPHA_REGEX, function (val, letter) {
    return letter.toUpperCase();
  });
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

function isNumber (value) {
  return typeof value === 'number';
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

function forEach$1 (value, iterator, context) {
  return value && forEach(value, iterator, context);
}

function forIn$1 (value, iterator, context) {
  return value && forIn(value, iterator, context);
}

function forNumber$1 (value, iterator, context) {
  return value && forNumber(value, iterator, context);
}

var toString = Object.prototype.toString;

function toString$1 (value) {
  return toString.call(value);
}

function isAsyncFunction (value) {
  return toString$1(value) === '[object AsyncFunction]';
}

function isBoolean (value) {
  return typeof value === 'boolean';
}

function isDate (value) {
  return toString$1(value) === '[object Date]';
}

function isObject (value) {
  return !isNil(value) && typeof value === 'object';
}

function isPromiseLike (value) {
  return !!value && isFunction(value.then);
}

function isString (value) {
  return typeof value === 'string';
}

function isUndefined (value) {
  return typeof value === 'undefined';
}

var RAW_DATA_TYPES = {};
'Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol'.split(',').forEach(function (name) {
  RAW_DATA_TYPES[("[object " + name + "]")] = name.toLowerCase();
});

function type (value) {
  if (isNil(value)) {
    return value + '';
  }
  return (isObject(value) || isFunction(value)) ? (RAW_DATA_TYPES[toString$1(value)] || 'object') : typeof value;
}

var index = {
  camelCase: camelCase,
  each: each,
  forEach: forEach$1,
  forIn: forIn$1,
  forNumber: forNumber$1,
  isArrayLike: isArrayLike,
  isAsyncFunction: isAsyncFunction,
  isBoolean: isBoolean,
  isDate: isDate,
  isFunction: isFunction,
  isNil: isNil,
  isNumber: isNumber,
  isObject: isObject,
  isPromiseLike: isPromiseLike,
  isString: isString,
  isUndefined: isUndefined,
  type: type
};

export default index;
