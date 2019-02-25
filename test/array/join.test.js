import join from '../../src/array/join';

it('测试 join 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(join(arr1, [7, 8, 9])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7, 8, 9])
  );
  expect(join(arr1, {})).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7, 8, 9])
  );
});
