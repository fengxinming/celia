import isNumber from './isNumber';
import isValidDate from './isValidDate';

export default function isLeapYear(year) {
  if (isValidDate(year)) {
    year = year.getFullYear();
  } else if (!isNumber(year)) {
    return false;
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
