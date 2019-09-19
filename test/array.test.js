import flat from '../src/flatten';
import flattenDeep from '../src/flattenDeep';
import remove from '../src/remove';
import removeAt from '../src/removeAt';
import forEach from '../src/forEach';
import forSlice from '../src/forSlice';

it('测试 flatten 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flat(arr1)).toEqual([1, 2, 3, 4, 5]);
  expect(flat(null).length).toBe(0);

  const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
  expect(flat(arr2)).toEqual([1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]);
});

it('测试 flattenDeep 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flattenDeep(arr1)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
  expect(flattenDeep(arr2)).toEqual([1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]);
  expect(flattenDeep(null).length).toBe(0);
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
  forEach(null, () => { });

  const arr = [1, 2, 3, 4];
  let i = 1;
  const ctx = {};
  forEach(arr, () => (i++));
  expect(i).toBe(5);
  i = 1;
  forEach(arr, function () {
    if (i === 1) {
      expect(this).toBe(ctx);
      return false;
    }
    i++;
  }, ctx);
  expect(i).toBe(1);
});

it('测试 forSlice 方法', () => {
  let i = 0;
  const arr = [1, 2, 3, 4];
  forSlice(null, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, 0, () => {
    i++;
  });
  expect(i).toBe(4);

  i = 0;
  forSlice(arr, 0, 2, () => {
    i++;
  });
  expect(i).toBe(2);

  i = 0;
  forSlice(arr, 0, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, 0, -1, () => {
    i++;
  });
  expect(i).toBe(3);

  i = 0;
  forSlice(arr, 0, -5, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, null, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, () => {
    i++;
  });
  expect(i).toBe(4);
});
