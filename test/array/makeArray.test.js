import makeArray from '../../src/array/makeArray';

it('测试 makeArray 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(makeArray(2, arr1)).toEqual(
    expect.arrayContaining([2, 1, 2, 3, 4, 5])
  );
  expect(makeArray(2, { 0: 'abc', 1: 'def', length: 2 })).toEqual(
    expect.objectContaining({ 0: 'abc', 1: 'def', 2: 2, length: 3 })
  );
  expect(makeArray('2', { 0: 'abc', 1: 'def', length: 2 })).toEqual(
    expect.objectContaining({ 0: 'abc', 1: 'def', 2: '2', length: 3 })
  );
  expect(makeArray(arr1, [7, 8, 9])).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5, 7, 8, 9])
  );
  expect(makeArray().length).toBe(0);
});
