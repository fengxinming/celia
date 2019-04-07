import forNumber from '../../src/number/forNumber';

it('测试 forNumber 方法', () => {

  expect(forNumber(5, () => { })).toBeUndefined();

});
