import isObject from '../src/isObject';

it('测试 isObject 方法', () => {

  expect(isObject(1)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject({})).toBe(true);

});
