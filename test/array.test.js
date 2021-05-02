import flat from '../src/_flat';
import remove from '../src/arr/remove';
import removeAt from '../src/arr/removeAt';
import forEach from '../src/arr/forEach';

it('测试 flat 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flat(arr1, [], 1)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
  expect(flat(arr2, [], 1)).toEqual([1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]);
});

it('测试 deep flat 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flat(arr1, [], Infinity)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
  expect(flat(arr2, [], Infinity)).toEqual([1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]);
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
  forEach(null, () => {
    //
  });

  const arr = [1, 2, 3, 4];
  let i = 1;
  forEach(arr, () => (i++));
  expect(i).toBe(5);

  i = 1;
  forEach(arr, () => {
    if (i === 1) {
      return false;
    }
    i++;
  });
  expect(i).toBe(1);

  i = 0;
  forEach(null, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forEach(arr, 0, () => {
    i++;
  });
  expect(i).toBe(4);

  i = 0;
  forEach(arr, 0, 2, () => {
    i++;
  });
  expect(i).toBe(2);

  i = 0;
  forEach(arr, 0, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forEach(arr, null, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forEach(arr, () => {
    i++;
  });
  expect(i).toBe(4);

  i = 0;
  forEach(5, () => {
    i++;
  });
  expect(i).toBe(5);

  i = 0;
  forEach(5, () => {
    if (i === 2) {
      return false;
    }
    i++;
  });
  expect(i).toBe(2);
});
