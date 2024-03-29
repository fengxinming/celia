import flat from '../src/array/flat';
import deepFlat from '../src/array/deepFlat';
import remove from '../src/array/remove';
import removeAt from '../src/array/removeAt';
import forEach from '../src/array/forEach';

it('测试 flat 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flat(arr1)).toEqual([1, 2, 3, 4, 5]);
  expect(flat(null).length).toBe(0);

  const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
  expect(flat(arr2)).toEqual([1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]);
});

it('测试 deepFlat 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(deepFlat(arr1)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
  expect(deepFlat(arr2)).toEqual([1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]);
  expect(deepFlat(null).length).toBe(0);
});

it('测试 remove 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(remove(arr1, 2)).toBe(2);
  expect(remove(arr1, 9)).toBeNull();
  expect(remove(null)).toBeNull();
});

it('测试 removeAt 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(removeAt(arr1, 2)).toBe(3);
  expect(removeAt(arr1, 9)).toBeNull();
  expect(removeAt(null)).toBeNull();
});

it('测试 forEach 方法', () => {
  let i = 0;
  expect(forEach([1, 2, 3, 4, 5], () => {
    i++;
  })).toBe(true);
  expect(i).toBe(5);

  i = 0;
  forEach([1, 2, 3, 4, 5], 0, 5, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forEach([1, 2, 3, 4, 5], 2, () => {
    i++;
  });
  expect(i).toBe(3);

  i = 0;
  forEach([1, 2, 3, 4, 5], 1, 3, () => {
    i++;
  });
  expect(i).toBe(2);

  i = 0;
  forEach([1, 2, 3, 4, 5], null, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  expect(forEach([1, 2, 3, 4, 5], null, null, (val, index) => {
    if (index === 2) {
      return false;
    }
    i++;
  })).toBe(true);
  expect(i).toBe(2);

  i = 0;
  expect(forEach(null, () => {
    i++;
  })).toBe(false);
  expect(i).toBe(0);

  i = 0;
  forEach([1, 2, 3, 4, 5]);
  expect(i).toBe(0);

  i = 0;
  forEach(5, (val) => {
    if (val === 3) {
      return false;
    }
    i++;
  });
  expect(i).toBe(2);

  i = 0;
  forEach(5, 2, () => {
    i++;
  });
  expect(i).toBe(4);

  i = 0;
  forEach(5, 2, 4, () => {
    i++;
  });
  expect(i).toBe(3);

  i = 0;
  forEach(5, 1, 10, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forEach(5, null, null, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forEach(5, null, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forEach(5);
  expect(i).toBe(0);
});
