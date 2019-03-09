import subtract from '../../src/date/subtract';
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

it('测试 subtract 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+subtract(date1, 1)).toBe(+date2.subtract(1));

  expect(+subtract(date1, 1, YEAR)).toBe(+date2.subtract(1, YEAR));
  expect(+subtract(date1, -1, YEAR)).toBe(+date2.subtract(-1, YEAR));

  expect(+subtract(date1, 1, MONTH)).toBe(+date2.subtract(1, MONTH));
  expect(+subtract(date1, -1, MONTH)).toBe(+date2.subtract(-1, MONTH));

  expect(+subtract(date1, 1, DAY)).toBe(+date2.subtract(1, DAY));
  expect(+subtract(date1, -1, DAY)).toBe(+date2.subtract(-1, DAY));

  expect(+subtract(date1, 1, HOUR)).toBe(+date2.subtract(1, HOUR));
  expect(+subtract(date1, -1, HOUR)).toBe(+date2.subtract(-1, HOUR));

  expect(+subtract(date1, 1, MINUTE)).toBe(+date2.subtract(1, MINUTE));
  expect(+subtract(date1, -1, MINUTE)).toBe(+date2.subtract(-1, MINUTE));

  expect(+subtract(date1, 1, SECOND)).toBe(+date2.subtract(1, SECOND));
  expect(+subtract(date1, -1, SECOND)).toBe(+date2.subtract(-1, SECOND));

  expect(+subtract(date1, 1, MILLISECOND)).toBe(+date2.subtract(1, MILLISECOND));
  expect(+subtract(date1, -1, MILLISECOND)).toBe(+date2.subtract(-1, MILLISECOND));
});
