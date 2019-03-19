import prefix from '../../src/qs/prepend';

it('测试 stringify 方法', () => {
  const str = 'a=1&b=2';
  expect(prefix(str, '?')).toBe('?' + str);
  expect(prefix(str)).toBe(str);
  expect(prefix('', '?')).toBe('');
});
