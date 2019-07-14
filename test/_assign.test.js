import assign from '../src/_assign';

it('测试 assign 方法', () => {
  let a = { a: 1 };
  const b = { b: 2 };
  const c = { c: 3 };
  assign(a, b, c);
  expect(a).toEqual(
    expect.objectContaining({
      c: 3,
      b: 2
    })
  );
  expect(() => {
    assign(null);
  }).toThrow();

  assign(a, null);
  expect(a.a).toBe(1);
});
