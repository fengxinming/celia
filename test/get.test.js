import get from '../src/get';

it('测试 get 方法', () => {
  const a = { 'a': [{ 'b': { 'c': 3 } }], 'key': 'value' };
  expect(get(null, 'a[0].b.c', 3)).toBe(3);
  expect(get(a, 'a[0].b.c')).toBe(3);
  expect(get(a, 'a["0"].b.c')).toBe(3);
  expect(get(a, 'a.b.c')).toBe(undefined);
  expect(get(a, 'a.b.c', 'default')).toBe('default');
  expect(get(a, 'key')).toBe('value');
  expect(get({ key: null }, 'key')).toBe(null);
});
