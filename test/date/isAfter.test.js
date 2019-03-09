import isAfter from '../../src/date/isAfter';
import moment from 'moment';
import {
  DAY
} from '../../src/_internal/_date/_dateConsts';

it('测试 isAfter 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isAfter(date1, '2018-08-05')).toBe(date2.isAfter('2018-08-05'));
  expect(isAfter(date1, '2018-08-05 10:11:11', DAY)).toBe(date2.isAfter('2018-08-05 10:11:11', DAY));
});
