import forIn from '../src/_forIn';

it('测试 forIn 方法', () => {
  const obj = { 1: 1, 2: 2, 3: 3 };
  let i = 0;
  forIn(obj, () => {
    i++;
    if (i === 2) {
      return false;
    }
  });
  expect(i).toBe(2);
  const a = {};
  forIn({ 1: 1, 2: 2 }, function () {
    expect(this).toBe(a);
  }, a);
});
