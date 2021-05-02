import moment from 'moment';
import _isInteger from '../src/_isInteger';
import isAbsoluteURL from '../src/is/isAbsoluteURL';
import isArrayLike from '../src/is/isArrayLike';
import isAsyncFunction from '../src/is/isAsyncFunction';
import isBoolean from '../src/is/isBoolean';
import isDate from '../src/is/isDate';
import isFalsy from '../src/is/isFalsy';
import isFunction from '../src/is/isFunction';
import isLeapYear from '../src/is/isLeapYear';
import isNil from '../src/is/isNil';
import isNumber from '../src/is/isNumber';
import isObject from '../src/is/isObject';
import isPlainObject from '../src/is/isPlainObject';
import isPromiseLike from '../src/is/isPromiseLike';
import isRegExp from '../src/is/isRegExp';
import isString from '../src/is/isString';
import isUndefined from '../src/is/isUndefined';
import isValidDate from '../src/is/isValidDate';
import isWindow from '../src/is/isWindow';

const { isInteger } = Number;
it('测试 _isInteger 方法', () => {
  // 兼容版本
  expect(_isInteger(2)).toBe(isInteger(2));
  expect(_isInteger(-2)).toBe(isInteger(-2));
  expect(_isInteger(1.23)).toBe(isInteger(1.23));
  expect(_isInteger(-1.23)).toBe(isInteger(-1.23));
  expect(_isInteger(null)).toBe(isInteger(null));
  expect(_isInteger(undefined)).toBe(isInteger(undefined));
  expect(_isInteger('2')).toBe(isInteger('2'));
  expect(_isInteger(Infinity)).toBe(isInteger(Infinity));
});

it('测试 isAbsoluteURL 方法', () => {
  expect(isAbsoluteURL('/src/isAbsoluteURL.js')).toBe(false);
  expect(isAbsoluteURL('https://github.com')).toBe(true);
});

it('测试 isArrayLike 方法', () => {
  expect(isArrayLike('123')).toBe(true);
  expect(isArrayLike(() => { /** */ })).toBe(false);
  expect(isArrayLike([])).toBe(true);
  expect(isArrayLike([1, 2, 3])).toBe(true);
  expect(isArrayLike({
    0: 1,
    length: 1
  })).toBe(true);
});

it('测试 isAsyncFunction 方法', () => {
  expect(isAsyncFunction(async () => { /** */ })).toBe(true);
  expect(isAsyncFunction(() => { /** */ })).toBe(false);
});

it('测试 isBoolean 方法', () => {
  expect(isBoolean(() => { /** */ })).toBe(false);
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
  expect(isFunction(async () => { /** */ })).toBe(true);
  expect(isFunction(() => { /** */ })).toBe(true);
  expect(isFunction({})).toBe(false);
});

it('测试 isLeapYear 方法', () => {
  const date2 = moment([2019, 1, 2]);

  expect(isLeapYear(2019)).toBe(date2.isLeapYear());

  date2.year(2000);
  expect(isLeapYear(2000)).toBe(date2.isLeapYear());

  date2.year(1000);
  expect(isLeapYear(1000)).toBe(date2.isLeapYear());

  date2.year(1024);
  expect(isLeapYear(1024)).toBe(date2.isLeapYear());

  date2.year(2018);
  expect(isLeapYear(2018)).toBe(date2.isLeapYear());

  date2.year(1997);
  expect(isLeapYear(1997)).toBe(date2.isLeapYear());
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
  expect(isPromiseLike(new Promise(() => { /** */ }))).toBe(true);
  expect(isPromiseLike({ then: () => { /** */ }, catch: () => { /** */ } })).toBe(true);
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

it('测试 isValidDate 方法', () => {
  const date1 = new Date(NaN);
  const date2 = moment(NaN);

  expect(isValidDate(date1)).toBe(date2.isValid());
});

it('测试 isWindow 方法', () => {
  expect(isWindow(null)).toBe(false);
  expect(isWindow(undefined)).toBe(false);
  expect(isWindow(window)).toBe(true);
});
