import _isInteger from '../src/_isInteger';

const { isInteger } = Number;
it('测试 isInteger 方法', () => {
  // 兼容版本
  expect(_isInteger(2)).toBe(true);
  expect(_isInteger(-2)).toBe(true);
  expect(_isInteger(1.23)).toBe(false);
  expect(_isInteger(-1.23)).toBe(false);
  expect(_isInteger(null)).toBe(false);
  expect(_isInteger(undefined)).toBe(false);
  expect(_isInteger('2')).toBe(false);
  expect(_isInteger(Infinity)).toBe(false);

  // 原生版本
  expect(isInteger(2)).toBe(true);
  expect(isInteger(-2)).toBe(true);
  expect(isInteger(1.23)).toBe(false);
  expect(isInteger(-1.23)).toBe(false);
  expect(isInteger(null)).toBe(false);
  expect(isInteger(undefined)).toBe(false);
  expect(isInteger('2')).toBe(false);
  expect(isInteger(Infinity)).toBe(false);
});
