import isPromiseLike from '../src/isPromiseLike';

it('测试 isPromiseLike 方法', () => {

  expect(isPromiseLike(null)).toBe(false);
  expect(isPromiseLike(undefined)).toBe(false);
  expect(isPromiseLike({})).toBe(false);
  expect(isPromiseLike(new Promise(() => { }))).toBe(true);
  expect(isPromiseLike({ then: () => { } })).toBe(true);

});
