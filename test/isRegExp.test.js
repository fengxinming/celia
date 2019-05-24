import isRegExp from '../src/isRegExp';

it('测试 isRegExp 方法', () => {

  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp(Object.create(null))).toBe(false);
  expect(isRegExp(/\d+/)).toBe(true);

});
