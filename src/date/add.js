import isObject from '../isObject';
import forOwn from '../_internal/_object/_forOwn';
import parseArray from '../_internal/_date/_parseArray';
import normalizeUnit from '../_internal/_date/_normalizeUnit';

const indexOfUnits = {
  Y: 0,
  M: 1,
  d: 2,
  h: 3,
  m: 4,
  s: 5,
  ms: 6
};

function getIndex(units) {
  units = normalizeUnit(units, 'ms');
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
    forOwn(num, (val, key) => {
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
