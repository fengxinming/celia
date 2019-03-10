import normalizeUnit, { fns } from '../_internal/_date/_normalizeUnit';

export default function (date, unit) {
  unit = normalizeUnit(unit, 't');
  return fns[unit](date);
}
