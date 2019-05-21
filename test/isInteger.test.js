import isInteger from '../src/isInteger';

it('测试 isInteger 方法', () => {

  expect(isInteger(2)).toBe(true);
  expect(isInteger(-2)).toBe(true);
  expect(isInteger(1.23)).toBe(false);
  expect(isInteger(-1.23)).toBe(false);
  expect(isInteger(null)).toBe(false);
  expect(isInteger(undefined)).toBe(false);
  expect(isInteger('2')).toBe(false);

});
