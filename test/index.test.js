import assign from '../src/_assign';
import forEach from '../src/_forEach';
import forIn from '../src/forIn';
import forNumber from '../src/_forNumber';
import forOwn from '../src/forOwn';
import _isInteger from '../src/_isInteger';
import each from '../src/each';
import getEasyHash from '../src/getEasyHash';
import getUid from '../src/getUid';
import hasOwn from '../src/hasOwn';
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
import looseEqual from '../src/looseEqual';
import map from '../src/map';
import sleep from '../src/sleep';
import type from '../src/type';
import assert from '../src/assert';
import alias from '../src/alias';
import assignDeep from '../src/assignDeep';
import copy from '../src/copy';
import get from '../src/get';
import set from '../src/set';
import mapObject from '../src/mapObject';
import beforeCall from '../src/beforeCall';
import afterCall from '../src/afterCall';
import aroundCall from '../src/aroundCall';
import debounce from '../src/debounce';

class A {

  constructor() {
    this.a = '111';
    this.d = '222';
    this.counter = 0;
  }
  b() { }
  c() { }
  increment() {
    this.counter++;
  }
  toString() {
    return '[object A]';
  }

}

describe('测试私有方法', () => {

  it('测试 _assign 方法', () => {
    let a = { a: 1 };
    const b = { b: 2 };
    const c = { c: 3 };
    assign(a, b, c);
    expect(a).toEqual(
      expect.objectContaining({
        c: 3,
        b: 2
      })
    );
    expect(() => {
      assign(null);
    }).toThrow();

    assign(a, null);
    expect(a.a).toBe(1);
  });

  it('测试 _forEach 方法', () => {
    const arr = [1, 2, 3];
    let count = 0;
    forEach(arr, () => {
      count++;
    });
    expect(count).toBe(3);

    count = 0;
    forEach(arr, () => {
      if (count === 2) {
        return false;
      }
      count++;
    });
    expect(count).toBe(2);
  });

  it('测试 _forNumber 方法', () => {

    let i = 0;
    forNumber(5, () => {
      i++;
    });
    expect(i).toBe(5);

    i = 0;
    forNumber(5, () => {
      if (i === 2) {
        return false;
      }
      i++;
    });
    expect(i).toBe(2);

  });

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

});

describe('测试首层函数', () => {

  it('测试 forIn 方法', () => {
    const obj = { 1: 1, 2: 2, 3: 3 };
    let i = 0;
    forIn(obj, () => {
      i++;
      if (i === 2) {
        return false;
      }
    });
    expect(i).toBe(2);
    const a = {};
    forIn({ 1: 1, 2: 2 }, function () {
      expect(this).toBe(a);
    }, a);

    i = 0;
    forIn(null, () => {
      i++;
    });
    expect(i).toBe(0);
  });

  it('测试 forOwn 方法', () => {
    const instance = new A();
    let i = 0;
    forOwn(instance, (val) => {
      if (val === '111') {
        i++;
        return false;
      }
    });
    expect(i).toBe(1);
    const ctx = {};
    forOwn(instance, function () {
      expect(this).toBe(ctx);
    }, ctx);

    i = 0;
    forOwn(null, () => {
      i++;
    });
    expect(i).toBe(0);
  });

  describe('测试 each 方法', () => {

    it('遍历空对象', () => {
      let i = 0;
      each(null, () => i++);
      expect(i).toBe(0);
    });

    it('遍历数组', () => {
      let i = 0;
      each([1, 2], () => i++);
      expect(i).toBe(2);

      i = 0;
      each([1, 2], () => {
        i++;
        if (i === 1) {
          return false;
        }
      });
      expect(i).toBe(1);
    });

    it('遍历数字', () => {
      let i = 0;
      each(10, () => i++);
      expect(i).toBe(10);

      i = 0;
      each(10, () => {
        i++;
        if (i === 2) {
          return false;
        }
      });
      expect(i).toBe(2);

    });

    it('遍历类数组', () => {
      let i = 0;
      each({
        0: 1,
        1: 2,
        length: 2
      }, () => i++);
      expect(i).toBe(2);

    });

    it('遍历对象', () => {
      let i = 0;
      each({
        a: 'a',
        b: 'b'
      }, () => i++);
      expect(i).toBe(2);

      i = 0;
      each({
        a: 'a',
        b: 'b'
      }, () => {
        return false;
      });
      expect(i).toBe(0);
    });

  });

  it('测试 getEasyHash 方法', () => {
    expect(getEasyHash('abc')).toBe('sabc');
    expect(getEasyHash(1)).toBe('n1');
    expect(getEasyHash({})).toBe('o1');
  });

  it('测试 getUid 方法', () => {
    const a = {};
    const b = {};
    expect(getUid(a)).not.toBe(getUid(b));
    expect(getUid(a)).toBe(getUid(a));
  });

  it('测试 hasOwn 方法', () => {
    const obj = { aaa: 111 };
    expect(hasOwn(obj, 'test')).toBe(false);
    expect(hasOwn(obj, 'aaa')).toBe(true);
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

  it('测试 looseEqual 方法', () => {
    expect(looseEqual(null, undefined)).toBe(false);
    expect(looseEqual(null, null)).toBe(true);
    expect(looseEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(looseEqual([1, 2], [1, 2])).toBe(true);
    expect(looseEqual(/\d+/, /\d+/)).toBe(true);
    expect(looseEqual(new Date(2019, 0, 1, 9, 9, 9), new Date(2019, 0, 1, 9, 9, 9))).toBe(true);
    expect(looseEqual(it, it)).toBe(true);
  });

  it('测试 map 方法', () => {
    let arr1 = [1, 2, 3, 4, 5];
    expect(map(arr1, n => n + 1)).toEqual(
      expect.arrayContaining([2, 3, 4, 5, 6])
    );
    arr1 = [1, null, 2, undefined, 3, 4, 5];
    expect(map(arr1, n => n && (n + 1))).toEqual(
      expect.arrayContaining([2, 3, 4, 5, 6])
    );
    const obj1 = { a: 1, b: 2 };
    expect(map(obj1, n => n + 1)).toEqual(
      expect.arrayContaining([2, 3])
    );
  });

  it('测试 sleep 方法', () => {
    expect(sleep(1000)).resolves.toBeUndefined();
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

  it('测试 assert 方法', () => {
    expect(() => {
      assert(false, 'assertionError');
    }).toThrow();
    expect(assert(true, 'assertionError')).toBeUndefined();
  });

  it('测试 alias 方法', () => {
    alias();

    const obj1 = { a: 1, b: 2 };
    alias(obj1, {
      c: 'd',
      e: ['f', 'g']
    });

    expect(obj1.c).toBe(obj1.d);
    expect(obj1.e).toBe(obj1.f);
  });

  it('测试 assignDeep 方法', () => {
    let a = { a: 1 };
    const b = { b: 2 };
    const c = { c: 3 };
    assignDeep(a, b, c);
    expect(a).toEqual(
      expect.objectContaining({
        a: 1,
        c: 3,
        b: 2
      })
    );

    expect(() => {
      assignDeep(null);
    }).toThrow();

    assignDeep(a, null);
    expect(a.a).toBe(1);

    const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
    const e = { a: 1, b: { bb: 1111 }, c: { cc: { ccc: 1 } }, d: { dd: 2 }, arr2: ['a', 'b'] };
    assignDeep(d, e);
    expect(d).toEqual(
      expect.objectContaining({
        a: 1,
        arr: ['a', 'b'],
        arr2: ['a', 'b', 3],
        b: {
          bb: 1111
        },
        c: {
          cc: {
            ccc: 1
          }
        },
        d: {
          dd: 2
        }
      })
    );
  });

  describe('测试 copy 方法', () => {
    it('浅复制', () => {
      const a = { a: 1 };
      const b = copy(a);
      expect(a).not.toBe(b);
      expect(a).toEqual(
        expect.objectContaining({
          a: 1
        })
      );

      const c = 1;
      expect(copy(c)).toBe(c);
    });

    it('深复制', () => {

      const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
      const cp = copy(d, true);
      expect(d).not.toBe(cp);
      expect(d.a).not.toBe(cp.a);
      expect(d.b).not.toBe(cp.b);
      expect(cp).toEqual(
        expect.objectContaining({
          a: {
            aa: {
              aaa: 1
            }
          },
          arr: ['a', 'b'],
          arr2: [1, 2, 3],
          b: {
            bb: 2
          }
        })
      );
    });

    it('深复制2', () => {
      const e = { a: 1, b: { bb: 1111 }, c: { cc: { ccc: 1 } }, d: { dd: 2 }, arr2: ['a', 'b'] };
      const cp2 = copy(e, true);
      expect(e).not.toBe(cp2);
      expect(cp2).toEqual(
        expect.objectContaining({
          a: 1,
          arr2: ['a', 'b'],
          b: {
            bb: 1111
          },
          c: {
            cc: {
              ccc: 1
            }
          },
          d: {
            dd: 2
          }
        })
      );
    });
  });

  it('测试 get 方法', () => {
    const a = { a: [{ b: { c: 3 } }], key: 'value' };
    expect(get(null, 'a[0].b.c', 3)).toBe(3);
    expect(get(a, 'a[0].b.c')).toBe(3);
    expect(get(a, 'a["0"].b.c')).toBe(3);
    expect(get(a, 'a.b.c')).toBe(undefined);
    expect(get(a, 'a.b.c', 'default')).toBe('default');
    expect(get(a, 'key')).toBe('value');
    expect(get({ key: null }, 'key')).toBe(null);
  });

  it('测试 set 方法', () => {
    const a = { a: [{ b: { c: 3 } }], key: 'value' };
    set(a, 'a[0].b.c', 1);
    expect(a).toEqual(
      expect.objectContaining({
        a: [{
          b: {
            c: 1
          }
        }]
      })
    );

    set(a, 'a["0"].b.c', 10);
    expect(a).toEqual(
      expect.objectContaining({
        a: [{
          b: {
            c: 10
          }
        }]
      })
    );

    set(a, 'a[1].b.c', 2);
    expect(get(a, 'a[1].b.c')).toBe(2);

    set(a, 'a["2"].b.c', 4);
    expect(get(a, 'a[2].b.c')).toBe(4);

    set(a, 'a.b.c', 4);
    expect(get(a, 'a.b.c')).toBe(4);

    set(a, 'value', 'a');
    expect(a).toEqual(
      expect.objectContaining({
        value: 'a'
      })
    );

    set(a, 'key', 'key');
    expect(a).toEqual(
      expect.objectContaining({
        key: 'key'
      })
    );

    const b = null;
    set(b, 'a.b');
    expect(b).toBe(null);

  });

  it('测试 mapObject 方法', () => {
    expect(mapObject({
      a: 1,
      b: 2
    }, (val, key) => {
      return val + 1;
    })).toEqual({
      a: 2,
      b: 3
    });
  });

  it('测试 beforeCall 方法', () => {
    beforeCall();

    const a = new A();
    expect(a.counter).toBe(0);

    beforeCall(a, 'increment', function () {
      this.counter = 1;
    });
    a.increment();
    expect(a.counter).toBe(2);
  });

  it('测试 afterCall 方法', () => {
    afterCall();

    const a = new A();
    expect(a.counter).toBe(0);

    afterCall(a, 'increment', function () {
      this.counter = 1;
    });
    a.increment();
    expect(a.counter).toBe(1);
  });

  it('测试 aroundCall 方法', () => {
    aroundCall();

    const a = new A();
    expect(a.counter).toBe(0);

    aroundCall(a, 'increment', function (fn, args) {
      this.counter = 1;
      fn.apply(this, args);
      this.counter = 1;
    });
    a.increment();
    expect(a.counter).toBe(1);
  });

  it('测试 debounce 方法', async () => {

    let i = 0;
    const counter = debounce(() => {
      i++;
    }, 200);
    counter();
    await sleep(100);
    counter();
    await sleep(100);
    counter();
    await sleep(200);
    await expect(i).toBe(1);
  });

});
