import forIn from '../src/forIn';

it('测试 forIn 方法', () => {
  expect(forIn(null, () => { })).toBeNull();
  expect(forIn({ 1: 1, 2: 2 }, () => { })).toBeUndefined();
  expect(forIn({ 1: 1, 2: 2 }, () => { }, {})).toBeUndefined();
});
