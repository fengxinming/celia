'use strict';

const types = require('../lib/type');

console.log('isUndefined', types.isUndefined(undefined));

console.log('isUndefinedOrNull', types.isUndefinedOrNull(null));

console.log('isObject', types.isObject({}));

console.log('isString', types.isString('123'));

console.log('isNumber', types.isNumber(123));

console.log('isNumeric', types.isNumeric('123,456'));

console.log('isDate', types.isDate(new Date()));

console.log('isRegExp', types.isRegExp(/\d+/g));

console.log('isWindow', types.isWindow(global));

console.log('isBoolean', types.isBoolean(false));

console.log('isFunction', types.isFunction(() => {}));

console.log('isArray', types.isArray([]));

console.log('isPromiseLike', types.isPromiseLike(new Promise(() => {})));

console.log('isArrayLike', types.isArrayLike([]));

console.log('isEmptyObject', types.isEmptyObject({}));

console.log('isNodeName', types.isNodeName({
  tagName: 'div'
}, 'div'));

console.log('isNative', types.isNative(Array.isArray));

console.log('type', types.type(Array));
console.log('type', types.type([]));