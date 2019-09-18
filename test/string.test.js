import camelize from '../src/camelize';
import capitalize from '../src/capitalize';
import joinPath from '../src/joinPath';
import formatString from '../src/formatString';

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

it('测试 joinPath 方法', () => {
  expect(joinPath()).toBe('.');
  expect(joinPath('https://www.baidu.com', 'path1')).toBe('https://www.baidu.com/path1');
  expect(joinPath('https://www.baidu.com/', 'path1')).toBe('https://www.baidu.com/path1');
  expect(joinPath('https://www.baidu.com/', '/path1')).toBe('https://www.baidu.com/path1');
  expect(joinPath('https://www.baidu.com', null, '/path1')).toBe('https://www.baidu.com/path1');
  expect(joinPath('https://www.baidu.com', null, undefined)).toBe('https://www.baidu.com');
});

it('测试 formatString 方法', () => {
  expect(formatString('共{0}条记录', 2)).toBe('共2条记录');
  expect(formatString('共{ page }条记录', {})).toBe('共{ page }条记录');
  expect(formatString('共{ page }条记录', { page: 2 })).toBe('共2条记录');
  expect(formatString(null)).toBe(null);
});
