import isSameOrAfter from '../../src/date/isSameOrAfter';
import moment from 'moment';
import {
  DAY
} from '../../src/_internal/_date/_dateConsts';

it('测试 isSameOrAfter 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isSameOrAfter(date1, '2018-08-05')).toBe(date2.isSameOrAfter('2018-08-05'));
  expect(isSameOrAfter(date1, '2018-08-05 10:11:11', DAY)).toBe(date2.isSameOrAfter('2018-08-05 10:11:11', DAY));
});
