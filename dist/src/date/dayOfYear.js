import daysInYear from '../_internal/_daysInYear';
import forNumber from '../_internal/_forNumber';
import isUndefined from '../isUndefined';

export default function (date, val) {
  const arr = daysInYear(date);
  const month = date.getMonth();
  let count = 0;
  forNumber(month, (i) => {
    count += arr[i];
  });
  count += date.getDate();
  if (isUndefined(val)) {
    return count;
  } else {
    date.setTime(+date + ((val - count) * 86400000));
    return date;
  }
}
