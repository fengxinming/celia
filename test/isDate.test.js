import isDate from '../src/isDate';

it('测试 isDate 方法', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate({})).toBe(false);
});
