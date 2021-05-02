import isDate from './isDate';

export default function (date) {
  return isDate(date) && date.toString() !== 'Invalid Date';
}
