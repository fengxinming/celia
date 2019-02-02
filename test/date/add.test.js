import add from '../../src/date/add';
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

it('测试 add 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+add(date1, 1)).toBe(+date2.add(1));

  expect(+add(date1, {
    [YEAR]: 1,
    [MONTH]: 1,
    [DAY]: 2,
    [HOUR]: 3,
    [MINUTE]: 4,
    [SECOND]: 5,
    [MILLISECOND]: 6
  })).toBe(+date2.add({
    [YEAR]: 1,
    [MONTH]: 1,
    [DAY]: 2,
    [HOUR]: 3,
    [MINUTE]: 4,
    [SECOND]: 5,
    [MILLISECOND]: 6
  }));

  expect(+add(date1, 1, YEAR)).toBe(+date2.add(1, YEAR));
  expect(+add(date1, -1, YEAR)).toBe(+date2.add(-1, YEAR));

  expect(+add(date1, 1, MONTH)).toBe(+date2.add(1, MONTH));
  expect(+add(date1, -1, MONTH)).toBe(+date2.add(-1, MONTH));

  expect(+add(date1, 1, DAY)).toBe(+date2.add(1, DAY));
  expect(+add(date1, -1, DAY)).toBe(+date2.add(-1, DAY));

  expect(+add(date1, 1, HOUR)).toBe(+date2.add(1, HOUR));
  expect(+add(date1, -1, HOUR)).toBe(+date2.add(-1, HOUR));

  expect(+add(date1, 1, MINUTE)).toBe(+date2.add(1, MINUTE));
  expect(+add(date1, -1, MINUTE)).toBe(+date2.add(-1, MINUTE));

  expect(+add(date1, 1, SECOND)).toBe(+date2.add(1, SECOND));
  expect(+add(date1, -1, SECOND)).toBe(+date2.add(-1, SECOND));

  expect(+add(date1, 1, MILLISECOND)).toBe(+date2.add(1, MILLISECOND));
  expect(+add(date1, -1, MILLISECOND)).toBe(+date2.add(-1, MILLISECOND));
});
