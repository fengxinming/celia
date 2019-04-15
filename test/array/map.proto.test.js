import '../../src/array/map.proto';

it('测试 map 方法', () => {
  let arr1 = [1, 2, 3, 4, 5];
  expect(arr1.c$map(n => n + 1)).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
  arr1 = [1, null, 2, undefined, 3, 4, 5];
  expect(arr1.c$map(n => n && (n + 1))).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
});
