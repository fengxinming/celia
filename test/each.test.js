import each from '../src/each';

it('测试 each 方法', () => {
  expect(each(null, () => { })).toBeUndefined();
  expect(each([1, 2], () => { })).toBeUndefined();
  expect(each(10, () => { })).toBeUndefined();
  expect(each({
    0: 1,
    1: 2,
    length: 2
  }, () => { })).toBeUndefined();
  expect(each({
    a: 'a',
    b: 'b'
  }, (val) => {
    if (val === 'b') {
      return false;
    }
  })).toBeUndefined();
});
