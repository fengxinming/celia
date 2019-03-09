import isLeapYear from '../../date/isLeapYear';

const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const arr2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function (date) {
  return isLeapYear(date) ? arr2 : arr;
}
