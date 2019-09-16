import camelize from '../src/camelize';
import capitalize from '../src/capitalize';

it('测试 camelize 方法', () => {

  expect(camelize()).toBe(undefined);
  expect(camelize(null)).toBe(null);
  const arr = [];
  expect(camelize(arr)).toBe(arr);
  expect(camelize('-value')).toBe('Value');
  expect(camelize('data-value')).toBe('dataValue');
  expect(camelize('data-------value')).toBe('dataValue');
  expect(camelize('data-attr-value')).toBe('dataAttrValue');
  expect(camelize('data--attr--value')).toBe('dataAttrValue');
  expect(camelize('data_value')).toBe('dataValue');
  expect(camelize('data_______value')).toBe('dataValue');
  expect(camelize('data_attr_value')).toBe('dataAttrValue');
  expect(camelize('data__attr__value')).toBe('dataAttrValue');
  expect(camelize('data value')).toBe('dataValue');
  expect(camelize('data       value')).toBe('dataValue');
  expect(camelize('data attr value')).toBe('dataAttrValue');
  expect(camelize('data  attr  value')).toBe('dataAttrValue');
  expect(camelize('data.value')).toBe('dataValue');
  expect(camelize('data.......value')).toBe('dataValue');
  expect(camelize('data.attr.value')).toBe('dataAttrValue');
  expect(camelize('data..attr..value')).toBe('dataAttrValue');

});

it('测试 capitalize 方法', () => {
  expect(capitalize()).toBe(undefined);
  expect(capitalize(null)).toBe(null);
  const arr = [];
  expect(capitalize(arr)).toBe(arr);
  expect(capitalize('value')).toBe('Value');
});
