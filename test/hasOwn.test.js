import hasOwn from '../src/hasOwn';
it('测试 hasOwn 方法', () => {
  const obj = { aaa: 111 };
  expect(hasOwn(obj, 'test')).toBe(false);
  expect(hasOwn(obj, 'aaa')).toBe(true);
});
