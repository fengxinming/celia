import normalizeUnit, { fns } from '../_internal/_date/_normalizeUnit';

export default function (date, unit, val) {
  unit = normalizeUnit(unit, 'ms');
  return fns[unit](date, val);
}
