import getUid from '../src/getUid';

it('测试 getUid 方法', () => {
  const a = {};
  const b = {};
  expect(getUid(a)).not.toBe(getUid(b));
  expect(getUid(a)).toBe(getUid(a));
});
