import getEasyHash from '../src/getEasyHash';
it('测试 getEasyHash 方法', () => {

  expect(getEasyHash('abc')).toBe('sabc');
  expect(getEasyHash(1)).toBe('n1');
  expect(getEasyHash({})).toBe('o1');
});
