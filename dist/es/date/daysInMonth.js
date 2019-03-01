import daysInYear from '../_internal/_date/_daysInYear';

export default function (date) {
  return daysInYear(date)[date.getMonth()];
};
