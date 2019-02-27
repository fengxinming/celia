import normalizeUnit from '../_internal/_normalizeUnit';
import { MILLISECOND } from '../_internal/_dateConsts';
import startOf from './startOf';
import add from './add';

export default function (date, units) {
  units = normalizeUnit(units);
  if (!units || units === MILLISECOND) {
    return date;
  }
  startOf(date, units);
  add(date, 1, units);
  add(date, -1, MILLISECOND);
  return date;
}
