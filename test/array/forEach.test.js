import forEach from '../../src/array/forEach';

it('测试 forEach 方法', () => {
  forEach(null, () => { });
  forEach([1], () => { });
});
