import isFunction from '../src/isFunction';

it('测试 isFunction 方法', () => {

  expect(isFunction(async () => { })).toBe(true);
  expect(isFunction(() => { })).toBe(true);
  expect(isFunction({})).toBe(false);

});
