import isObject from '../isObject';
import forIn from '../_internal/_forIn';
import parseArray from '../_internal/_parseArray';
import normalizeUnit from '../_internal/_normalizeUnit';
import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  MILLISECOND
} from '../_internal/_dateConsts';

const indexOfUnits = {
  [YEAR]: 0,
  [MONTH]: 1,
  [DAY]: 2,
  [HOUR]: 3,
  [MINUTE]: 4,
  [SECOND]: 5,
  [MILLISECOND]: 6
};

function getIndex(units) {
  units = units ? normalizeUnit(units) : MILLISECOND;
  return indexOfUnits[units];
}

export default function (date, num, units) {
  const arr = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
  if (isObject(num)) {
    forIn(num, (val, key) => {
      const index = getIndex(key);
      arr[index] += val;
    });
  } else {
    const index = getIndex(units);
    arr[index] += num;
  }
  date.setTime(+parseArray(arr));
  return date;
};
