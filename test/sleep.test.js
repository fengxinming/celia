import sleep from '../src/sleep';

it('测试 sleep 方法', () => {

  expect(sleep(1000)).resolves.toBeUndefined();

});
