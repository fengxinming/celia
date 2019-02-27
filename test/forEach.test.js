import forEach from '../src/forEach';

it('测试 forEach 方法', () => {
  forEach(null, () => { });
  forEach([1], () => { });
});
