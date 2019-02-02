import isBoolean from '../src/isBoolean';

it('测试 isBoolean 方法', () => {
  expect(isBoolean(() => { })).toBe(false);
  expect(isBoolean(true)).toBe(true);
});
