import '../../src/array/append.proto';

it('测试 append 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.append(6)[arr1.length - 1]).toBe(6);
});
