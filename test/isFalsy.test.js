import isFalsy from '../src/isFalsy';

it('测试 isDate 方法', () => {
  expect(isFalsy(false)).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy(undefined)).toBe(true);
  expect(isFalsy(0)).toBe(true);
  expect(isFalsy(NaN)).toBe(true);
  expect(isFalsy('')).toBe(true);
  expect(isFalsy({})).toBe(false);
});
