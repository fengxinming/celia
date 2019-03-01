import add from '../../src/date/add';
import moment from 'moment';

it('测试 add 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+add(date1, 1)).toBe(+date2.add(1));

  expect(+add(date1, {
    year: 1,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
    millisecond: 6
  })).toBe(+date2.add({
    year: 1,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
    millisecond: 6
  }));

  expect(+add(date1, 1, 'year')).toBe(+date2.add(1, 'year'));
  expect(+add(date1, -1, 'year')).toBe(+date2.add(-1, 'year'));

  expect(+add(date1, 1, 'month')).toBe(+date2.add(1, 'month'));
  expect(+add(date1, -1, 'month')).toBe(+date2.add(-1, 'month'));

  expect(+add(date1, 1, 'day')).toBe(+date2.add(1, 'day'));
  expect(+add(date1, -1, 'day')).toBe(+date2.add(-1, 'day'));

  expect(+add(date1, 1, 'hour')).toBe(+date2.add(1, 'hour'));
  expect(+add(date1, -1, 'hour')).toBe(+date2.add(-1, 'hour'));

  expect(+add(date1, 1, 'minute')).toBe(+date2.add(1, 'minute'));
  expect(+add(date1, -1, 'minute')).toBe(+date2.add(-1, 'minute'));

  expect(+add(date1, 1, 'second')).toBe(+date2.add(1, 'second'));
  expect(+add(date1, -1, 'second')).toBe(+date2.add(-1, 'second'));

  expect(+add(date1, 1, 'millisecond')).toBe(+date2.add(1, 'millisecond'));
  expect(+add(date1, -1, 'millisecond')).toBe(+date2.add(-1, 'millisecond'));
});
