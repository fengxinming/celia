import forEach from '../src/_forEach';

it('测试 forEach 方法', () => {
  const arr = [1, 2, 3];
  let count = 0;
  forEach(arr, () => {
    count++;
  });
  expect(count).toBe(3);
});
