import each from '../src/each';

it('测试 each 方法', () => {
  each(null, () => { });
  each([1, 2], () => { });
  each(10, () => { });
  each({
    0: 1,
    1: 2,
    length: 2
  }, () => { });
  each({
    a: 'a',
    b: 'b'
  }, (val) => {
    if (val === 'b') {
      return false;
    }
  });
});
