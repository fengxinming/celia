import combine from '../../src/array/combine';

it('测试 combine 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(combine(arr1, [7, 8, 9])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7, 8, 9])
  );
  expect(combine(arr1, {})).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7, 8, 9])
  );
});
