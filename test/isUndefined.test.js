import isUndefined from '../src/isUndefined';

it('测试 isUndefined 方法', () => {

  expect(isUndefined(null)).toBe(false);
  expect(isUndefined(undefined)).toBe(true);

});
