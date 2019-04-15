import append from '../../src/array/append';

it('测试 append 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(append(arr1, 6)).toBe(6);
  expect(append(null)).toBe(undefined);
});
