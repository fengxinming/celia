import isString from '../isString';
import forIn from './forIn';
import * as UNIT from './UNIT';

const UNITS = {};
forIn(UNIT, (val) => {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[val.slice(0, 1)] = val;
});
UNITS.M = UNIT.MONTH;
UNITS.m = UNIT.MINUTE;
UNITS.ms = UNIT.MILLISECOND;

export default function (u) {
  return isString(u) ? UNITS[u] : undefined;
}
