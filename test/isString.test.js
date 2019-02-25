import isString from '../src/isString';

it('测试 isString 方法', () => {

  expect(isString(null)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString(1)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString('')).toBe(true);

});
