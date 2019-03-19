import stringify from '../../src/qs/stringify';

it('测试 stringify 方法', () => {
  expect(stringify(null)).toBe('');
  let str = stringify({
    a: 1,
    b: null,
    c: undefined,
    d: NaN,
    e: ''
  });
  expect(str).toEqual(
    expect.stringContaining('a=1')
  );
});
