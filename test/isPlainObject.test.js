import isPlainObject from '../src/isPlainObject';

it('测试 isDate 方法', () => {
  expect(isPlainObject(new Date())).toBe(false);
  expect(isPlainObject({})).toBe(true);
});
