import isAbsolute from '../../src/url/isAbsolute';

it('测试 isAbsolute 方法', () => {

  expect(isAbsolute('http://www.baidu.com')).toBe(true);
  expect(isAbsolute('//www.baidu.com')).toBe(true);
  expect(isAbsolute('/api')).toBe(false);

});
