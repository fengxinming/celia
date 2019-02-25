import inArray from '../../src/array/inArray';

it('测试 inArray 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(inArray(2, arr1)).toBe(1);
  expect(inArray(2, arr1, 2)).toBe(-1);
  expect(inArray(4, arr1, 2)).toBe(3);
  expect(inArray()).toBe(-1);
});

it('用arraylike测试 inArray 方法', () => {
  const arr1 = { 0: 'abc', 1: 'def', 2: 'aaa', 3: 'bbb', length: 4 };
  expect(inArray(2, arr1)).toBe(-1);
  expect(inArray('aaa', arr1, 3)).toBe(-1);
  expect(inArray('def', arr1, 1)).toBe(1);
  expect(inArray('bbb', arr1, -1)).toBe(3);
});
