import diff from '../../src/date/diff';
import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  MILLISECOND
} from '../../src/_internal/UNIT';
import moment from 'moment';

it('测试 diff 方法', () => {
  const date1 = new Date('2018-08-01');
  const date2 = moment(+date1);

  const input = '2018-08-01 11:11:11.111';
  const input2 = 1533561132000;
  const input3 = new Date();
  const input4 = [2018, 0, 5];
  const input5 = [2020, 3, 5];
  const input6 = [2019, 0, 5];
  const input7 = [2019, 8, 5];

  expect(diff(date1, input)).toBe(date2.diff(input));
  expect(diff(date1, input, YEAR)).toBe(date2.diff(input, YEAR));
  expect(diff(date1, input, MONTH)).toBe(date2.diff(input, MONTH));
  expect(diff(date1, input, DAY)).toBe(date2.diff(input, DAY));
  expect(diff(date1, input, HOUR)).toBe(date2.diff(input, HOUR));
  expect(diff(date1, input, MINUTE)).toBe(date2.diff(input, MINUTE));
  expect(diff(date1, input, SECOND)).toBe(date2.diff(input, SECOND));
  expect(diff(date1, input, MILLISECOND)).toBe(date2.diff(input, MILLISECOND));

  expect(diff(date1, input3, YEAR)).toBe(date2.diff(input3, YEAR));
  expect(diff(date1, input3, MONTH)).toBe(date2.diff(input3, MONTH));
  expect(diff(date1, input3, DAY)).toBe(date2.diff(input3, DAY));
  expect(diff(date1, input3, HOUR)).toBe(date2.diff(input3, HOUR));
  expect(diff(date1, input3, MINUTE)).toBe(date2.diff(input3, MINUTE));
  expect(diff(date1, input3, SECOND)).toBe(date2.diff(input3, SECOND));
  expect(diff(date1, input3, MILLISECOND)).toBe(date2.diff(input3, MILLISECOND));

  expect(diff(date1, input2, YEAR)).toBe(date2.diff(input2, YEAR));
  expect(diff(date1, input3, MONTH, true)).toBe(date2.diff(input3, MONTH, true));
  expect(diff(date1, input4, MONTH)).toBe(date2.diff(input4, MONTH));
  expect(diff(date1, input4, DAY, true)).toBe(date2.diff(input4, DAY, true));
  expect(diff(date1, input4, YEAR, true)).toBe(date2.diff(input4, YEAR, true));
  expect(diff(date1, input5, MONTH)).toBe(date2.diff(input5, MONTH));
  expect(diff(date1, input5, YEAR)).toBe(date2.diff(input5, YEAR));
  expect(diff(date1, input6, MONTH)).toBe(date2.diff(input6, MONTH));
  expect(diff(date1, input6, YEAR)).toBe(date2.diff(input6, YEAR));
  expect(diff(date1, input7, MONTH)).toBe(date2.diff(input7, MONTH));
  expect(diff(date1, input7, YEAR)).toBe(date2.diff(input7, YEAR));
});
