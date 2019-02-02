import isSame from '../../src/date/isSame';
import moment from 'moment';
import {
  YEAR,
  MONTH,
  DAY
} from '../../src/_internal/UNIT';

it('测试 isSame 方法', () => {
  const date1 = new Date(2018, 7, 5);
  const date2 = moment(+date1);

  expect(isSame(date1, '2018-08-05')).toBe(date2.isSame('2018-08-05'));
  expect(isSame(date1, '2018-08-05 10:11:11', YEAR)).toBe(date2.isSame('2018-08-05 10:11:11', YEAR));
  expect(isSame(date1, '2018-08-05 10:11:11', MONTH)).toBe(date2.isSame('2018-08-05 10:11:11', MONTH));
  expect(isSame(date1, '2018-08-05 10:11:11', DAY)).toBe(date2.isSame('2018-08-05 10:11:11', DAY));
});
