import camelCase from '../src/camelCase';

it('测试 camelCase 方法', () => {

  expect(camelCase('data-value')).toBe('dataValue');

});
