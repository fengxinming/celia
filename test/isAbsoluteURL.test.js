import isAbsoluteURL from '../src/isAbsoluteURL';
it('测试 isAbsoluteURL 方法', () => {

  expect(isAbsoluteURL('/src/isAbsoluteURL.js')).toBe(false);
  expect(isAbsoluteURL('https://github.com')).toBe(true);
});
