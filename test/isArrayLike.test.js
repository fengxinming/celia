import isArrayLike from '../src/isArrayLike';

it('测试 isArrayLike 方法', () => {
  expect(isArrayLike('123')).toBe(true);
  expect(isArrayLike(() => { })).toBe(false);
  expect(isArrayLike([])).toBe(true);
  expect(isArrayLike([1, 2, 3])).toBe(true);
  expect(isArrayLike({
    0: 1,
    length: 1
  })).toBe(true);
});
