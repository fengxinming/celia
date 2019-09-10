import assert from '../src/assert';
import getEasyHash from '../src/getEasyHash';
import isAbsoluteURL from '../src/isAbsoluteURL';
import isArrayLike from '../src/isArrayLike';
import isAsyncFunction from '../src/isAsyncFunction';
import isBoolean from '../src/isBoolean';
import isDate from '../src/isDate';
import isFalsy from '../src/isFalsy';
import isFunction from '../src/isFunction';
import isNil from '../src/isNil';
import isNumber from '../src/isNumber';
import isObject from '../src/isObject';
import isPlainObject from '../src/isPlainObject';
import isPromiseLike from '../src/isPromiseLike';
import isRegExp from '../src/isRegExp';
import isString from '../src/isString';
import isUndefined from '../src/isUndefined';
import isWindow from '../src/isWindow';
import looseEqual from '../src/looseEqual';
import sleep from '../src/sleep';
import toString from '../src/toString';
import type from '../src/type';
import A from './A';

it('测试 assert 方法', () => {
  expect(() => {
    assert(false, 'assertionError');
  }).toThrow();
  expect(assert(true, 'assertionError')).toBeUndefined();
});

it('测试 getEasyHash 方法', () => {
  expect(getEasyHash('abc')).toBe('sabc');
  expect(getEasyHash(1)).toBe('n1');
  expect(getEasyHash({})).toBe('o1');
});

it('测试 isAbsoluteURL 方法', () => {
  expect(isAbsoluteURL('/src/isAbsoluteURL.js')).toBe(false);
  expect(isAbsoluteURL('https://github.com')).toBe(true);
});

it('测试 isArrayLike 方法', () => {
  expect(isArrayLike('123')).toBe(true);
  expect(isArrayLike(() => { })).toBe(false);
  expect(isArrayLike([])).toBe(true);
  expect(isArrayLike([1, 2, 3])).toBe(true);
  expect(isArrayLike({
    0: 1,
    length: 1
  })).toBe(true);
});

it('测试 isAsyncFunction 方法', () => {
  expect(isAsyncFunction(async () => { })).toBe(true);
  expect(isAsyncFunction(() => { })).toBe(false);
});

it('测试 isBoolean 方法', () => {
  expect(isBoolean(() => { })).toBe(false);
  expect(isBoolean(true)).toBe(true);
});

it('测试 isDate 方法', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate({})).toBe(false);
});

it('测试 isFalsy 方法', () => {
  expect(isFalsy(false)).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy(undefined)).toBe(true);
  expect(isFalsy(0)).toBe(true);
  expect(isFalsy(NaN)).toBe(true);
  expect(isFalsy('')).toBe(true);
  expect(isFalsy({})).toBe(false);
});

it('测试 isFunction 方法', () => {
  expect(isFunction(async () => { })).toBe(true);
  expect(isFunction(() => { })).toBe(true);
  expect(isFunction({})).toBe(false);
});

it('测试 isNil 方法', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil({})).toBe(false);
});

it('测试 isNumber 方法', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber({})).toBe(false);
});

it('测试 isObject 方法', () => {
  expect(isObject(1)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject({})).toBe(true);
});

it('测试 isPlainObject 方法', () => {
  expect(isPlainObject(new Date())).toBe(false);
  expect(isPlainObject({})).toBe(true);
});

it('测试 isPromiseLike 方法', () => {
  expect(isPromiseLike(null)).toBe(false);
  expect(isPromiseLike(undefined)).toBe(false);
  expect(isPromiseLike({})).toBe(false);
  expect(isPromiseLike(new Promise(() => { }))).toBe(true);
  expect(isPromiseLike({ then: () => { }, catch: () => { } })).toBe(true);
});

it('测试 isRegExp 方法', () => {
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp(Object.create(null))).toBe(false);
  expect(isRegExp(/\d+/)).toBe(true);
});

it('测试 isString 方法', () => {
  expect(isString(null)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString(1)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString('')).toBe(true);
});

it('测试 isUndefined 方法', () => {
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined(undefined)).toBe(true);
});

it('测试 isWindow 方法', () => {
  expect(isWindow(null)).toBe(false);
  expect(isWindow(undefined)).toBe(false);
  expect(isWindow(window)).toBe(true);
});

it('测试 looseEqual 方法', () => {
  expect(looseEqual(null, undefined)).toBe(false);
  expect(looseEqual(null, null)).toBe(true);
  expect(looseEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  expect(looseEqual([1, 2], [1, 2])).toBe(true);
  expect(looseEqual(/\d+/, /\d+/)).toBe(true);
  expect(looseEqual(new Date(2019, 0, 1, 9, 9, 9), new Date(2019, 0, 1, 9, 9, 9))).toBe(true);
  expect(looseEqual(it, it)).toBe(true);
});

it('测试 sleep 方法', () => {
  expect(sleep(1000)).resolves.toBeUndefined();
});

it('测试 toString 方法', () => {
  expect(toString({})).toBe('[object Object]');
  expect(toString([])).toBe('[object Array]');
});

it('测试 type 方法', () => {
  expect(type([2018, 7, 5])).toBe('array');
  expect(type()).toBe('undefined');
  expect(type(() => { })).toBe('function');
  expect(type({})).toBe('object');
  expect(type(1)).toBe('number');
  expect(type(new A())).toBe('object');
  expect(type(true)).toBe('boolean');
  expect(type('string')).toBe('string');
  expect(type(new Date())).toBe('date');
  expect(type(/\d+/)).toBe('regexp');
  expect(type(new Error())).toBe('error');
  expect(type(Symbol('111'))).toBe('symbol');
  expect(type(new Map())).toBe('object');
  expect(type(new Set())).toBe('object');
});
