import '../../src/array/removeAt.proto';

it('测试 remove 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.removeAt(2)).toBe(3);
  expect(arr1.removeAt(9)).toBeNull();
});
