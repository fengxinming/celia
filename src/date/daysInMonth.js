import { daysInYear } from '../_internal/func';

export default function (date) {
  return daysInYear(date)[date.getMonth()];
};
