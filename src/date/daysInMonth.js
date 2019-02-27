import daysInYear from '../_internal/_daysInYear';

export default function (date) {
  return daysInYear(date)[date.getMonth()];
};
