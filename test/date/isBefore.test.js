import isBefore from '../../src/date/isBefore';
import moment from 'moment';
import {
  DAY
} from '../../src/_internal/_date/_dateConsts';

it('测试 isBefore 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isBefore(date1, '2018-08-05')).toBe(date2.isBefore('2018-08-05'));
  expect(isBefore(date1, '2018-08-05 10:11:11', DAY)).toBe(date2.isBefore('2018-08-05 10:11:11', DAY));
});
