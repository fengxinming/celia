import isNumber from '../src/isNumber';

it('测试 isNumber 方法', () => {

  expect(isNumber(1)).toBe(true);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber({})).toBe(false);

});
