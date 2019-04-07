import forIn from '../../src/object/forIn';

it('测试 forIn 方法', () => {
  expect(forIn(null, () => { })).toBe(false);
  expect(forIn({ 1: 1, 2: 2 }, () => { })).toBeUndefined();
  const a = {};
  forIn({ 1: 1, 2: 2 }, function () {
    expect(this).toBe(a);
  }, a);
});
