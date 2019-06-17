import camelCase from '../src/camelCase';

it('测试 camelCase 方法', () => {

  expect(camelCase()).toBe(undefined);
  expect(camelCase(null)).toBe(null);
  const arr = [];
  expect(camelCase(arr)).toBe(arr);
  expect(camelCase('-value')).toBe('Value');
  expect(camelCase('data-value')).toBe('dataValue');
  expect(camelCase('data-------value')).toBe('dataValue');
  expect(camelCase('data-attr-value')).toBe('dataAttrValue');
  expect(camelCase('data--attr--value')).toBe('dataAttrValue');
  expect(camelCase('data_value')).toBe('dataValue');
  expect(camelCase('data_______value')).toBe('dataValue');
  expect(camelCase('data_attr_value')).toBe('dataAttrValue');
  expect(camelCase('data__attr__value')).toBe('dataAttrValue');
  expect(camelCase('data value')).toBe('dataValue');
  expect(camelCase('data       value')).toBe('dataValue');
  expect(camelCase('data attr value')).toBe('dataAttrValue');
  expect(camelCase('data  attr  value')).toBe('dataAttrValue');
  expect(camelCase('data.value')).toBe('dataValue');
  expect(camelCase('data.......value')).toBe('dataValue');
  expect(camelCase('data.attr.value')).toBe('dataAttrValue');
  expect(camelCase('data..attr..value')).toBe('dataAttrValue');

});
