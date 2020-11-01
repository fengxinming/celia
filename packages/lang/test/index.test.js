import assert from '../src/assert';
import each from '../src/each';
import easyHash from '../src/easyHash';
import looseEqual from '../src/looseEqual';
import map from '../src/map';
import sleep from '../src/sleep';
import toString from '../src/toString';

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
