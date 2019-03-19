import parse from '../../src/qs/parse';

it('测试 parse 方法', () => {
  expect(Object.keys(parse(null)).length).toBe(0);
  expect(parse('a=1&b=2&c=3&d=&f=')).toEqual(
    expect.objectContaining({
      a: expect.any(String),
      b: expect.any(String),
      c: expect.any(String),
      d: expect.any(String),
      f: expect.any(String)
    })
  );
  expect(parse('a=1&a=2&a=3&d=&f=')).toEqual(
    expect.objectContaining({
      a: expect.any(Array)
    })
  );
});
