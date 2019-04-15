import '../../src/array/remove.proto';

it('测试 remove 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.remove(2)).toBe(2);
  expect(arr1.remove(9)).toBeNull();
});
