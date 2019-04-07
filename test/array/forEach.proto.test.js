import '../../src/array/forEach.proto';

it('测试 forEach 方法', () => {
  const arr = [1, 2, 3, 4];
  let i = 1;
  arr.c$forEach(() => (i++));
  expect(i).toBe(5);

  arr.each(() => (i++));
  expect(i).toBe(9);
});
