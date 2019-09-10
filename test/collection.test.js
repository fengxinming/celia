import each from '../src/each';
import map from '../src/map';
import transform from '../src/transform';

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
