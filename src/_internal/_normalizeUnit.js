import isString from '../isString';
import {
  YEAR,
  MONTH,
  DATE,
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  MILLISECOND
} from './_dateConsts';

const UNITS = {};
const setter = function (val) {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[val.slice(0, 1)] = val;
};
setter(MILLISECOND);
setter(YEAR);
setter(MONTH);
setter(DATE);
setter(DAY);
setter(HOUR);
setter(MINUTE);
setter(SECOND);
UNITS.M = MONTH;
UNITS.ms = MILLISECOND;

export default function (u) {
  return isString(u) ? UNITS[u] : undefined;
}
