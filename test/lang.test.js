import forNumber from '../src/_forNumber';
import assert from '../src/assert';
import each from '../src/each';
import easyHash from '../src/easyHash';
import hasOwn from '../src/hasOwn';
import looseClone from '../src/looseClone';
import looseEqual from '../src/looseEqual';
import map from '../src/map';
import sleep from '../src/sleep';
import toString from '../src/toString';
import transform from '../src/transform';
import uid from '../src/uid';
import className from '../src/className';
import classNames from '../src/classNames';

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

it('测试 assert 方法', () => {
  expect(() => {
    assert(false, 'assertionError');
  }).toThrow();
  expect(assert(true, 'assertionError')).toBeUndefined();
});

it('测试 easyHash 方法', () => {
  expect(easyHash('abc')).toBe('sabc');
  expect(easyHash(1)).toBe('n1');
  expect(easyHash({})).toBe('o1');
});

it('测试 hasOwn 方法', () => {
  const obj = { aaa: 111 };
  expect(hasOwn(obj, 'test')).toBe(false);
  expect(hasOwn(obj, 'aaa')).toBe(true);
});

describe('测试 looseClone 方法', () => {
  it('浅复制', () => {
    const a = { a: 1 };
    const b = looseClone(a);
    expect(a).not.toBe(b);
    expect(a).toEqual(
      expect.objectContaining({
        a: 1
      })
    );

    const c = 1;
    expect(looseClone(c)).toBe(c);
  });

  it('深复制', () => {

    const d = { a: { aa: { aaa: 1 } }, b: { bb: 2 }, arr: ['a', 'b'], arr2: [1, 2, 3] };
    const cp = looseClone(d, true);
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
    const cp2 = looseClone(e, true);
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

it('测试 transform 方法', () => {
  const obj = { a: 1, b: 2 };
  const newObj = transform(obj, (newObj, value, key) => {
    newObj[key] = value + 1;
  }, {});
  expect(newObj).toEqual({
    a: 2,
    b: 3
  });

  const arr = [1, 2];
  const newArr = transform(arr, (newArr, value, key) => {
    newArr[key] = value + 1;
  }, []);
  expect(newArr).toEqual([2, 3]);
});

it('测试 uid 方法', () => {
  const a = {};
  const b = {};
  expect(uid(a)).not.toBe(uid(b));
  expect(uid(a)).toBe(uid(a));
});

it('测试 className 方法', () => {
  expect(className({ class1: false, class2: true, '': true })).toBe('class2');
  expect(className([{ class2: true }, [], null, '', 'class3', 'class4'])).toBe('class2 class3 class4');
  expect(className(['class3', 'class4'])).toBe('class3 class4');
  expect(className('class5')).toBe('class5');
  expect(className([])).toBe('');
});

it('测试 classNames 方法', () => {
  expect(classNames({ class1: false, class2: true }, '', ['class3', 'class4'], 'class5')).toBe('class2 class3 class4 class5');
});
