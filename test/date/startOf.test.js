import startOf from '../../src/date/startOf';
import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  MILLISECOND
} from '../../src/_internal/_date/_dateConsts';
import moment from 'moment';

it('测试 startOf 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+startOf(date1)).toBe(+date2.startOf());
  expect(+startOf(date1, YEAR)).toBe(+date2.startOf(YEAR));
  expect(+startOf(date1, MONTH)).toBe(+date2.startOf(MONTH));
  expect(+startOf(date1, DAY)).toBe(+date2.startOf(DAY));
  expect(+startOf(date1, HOUR)).toBe(+date2.startOf(HOUR));
  expect(+startOf(date1, MINUTE)).toBe(+date2.startOf(MINUTE));
  expect(+startOf(date1, SECOND)).toBe(+date2.startOf(SECOND));
  expect(+startOf(date1, MILLISECOND)).toBe(+date2.startOf(MILLISECOND));

});
