import type from '../src/type';

class A {

  toString() {
    return '[object A]';
  }

}

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
