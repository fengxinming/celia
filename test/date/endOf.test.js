import endOf from '../../src/date/endOf';
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

it('测试 endOf 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+endOf(date1)).toBe(+date2.endOf());
  expect(+endOf(date1, YEAR)).toBe(+date2.endOf(YEAR));
  expect(+endOf(date1, MONTH)).toBe(+date2.endOf(MONTH));
  expect(+endOf(date1, DAY)).toBe(+date2.endOf(DAY));
  expect(+endOf(date1, HOUR)).toBe(+date2.endOf(HOUR));
  expect(+endOf(date1, MINUTE)).toBe(+date2.endOf(MINUTE));
  expect(+endOf(date1, SECOND)).toBe(+date2.endOf(SECOND));
  expect(+endOf(date1, MILLISECOND)).toBe(+date2.endOf(MILLISECOND));

});
