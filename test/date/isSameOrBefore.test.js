import isSameOrBefore from '../../src/date/isSameOrBefore';
import moment from 'moment';
import {
  DAY
} from '../../src/_internal/UNIT';

it('测试 isSame 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isSameOrBefore(date1, '2018-08-05')).toBe(date2.isSameOrBefore('2018-08-05'));
  expect(isSameOrBefore(date1, '2018-08-05 10:11:11', DAY)).toBe(date2.isSameOrBefore('2018-08-05 10:11:11', DAY));
});
