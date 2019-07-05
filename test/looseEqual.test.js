import looseEqual from '../src/looseEqual';

it('测试 looseEqual 方法', () => {

  expect(looseEqual(null, undefined)).toBe(false);
  expect(looseEqual(null, null)).toBe(true);
  expect(looseEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  expect(looseEqual([1, 2], [1, 2])).toBe(true);
  expect(looseEqual(/\d+/, /\d+/)).toBe(true);
  expect(looseEqual(new Date(2019, 0, 1, 9, 9, 9), new Date(2019, 0, 1, 9, 9, 9))).toBe(true);
  expect(looseEqual(it, it)).toBe(true);
});
