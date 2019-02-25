import isAsyncFunction from '../src/isAsyncFunction';

it('测试 isAsyncFunction 方法', () => {

  expect(isAsyncFunction(async () => { })).toBe(true);
  expect(isAsyncFunction(() => { })).toBe(false);

});
