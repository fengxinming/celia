import isNil from '../src/isNil';

it('测试 isNil 方法', () => {

  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil({})).toBe(false);

});
