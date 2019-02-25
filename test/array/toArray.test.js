import toArray from '../../src/array/toArray';

it('测试 toArray 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(toArray(arr1)).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5])
  );
  expect(toArray(arr1) !== arr1).toBe(true);
});
