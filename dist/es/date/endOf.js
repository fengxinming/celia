import normalizeUnit from '../_internal/_date/_normalizeUnit';
import startOf from './startOf';
import add from './add';

export default function (date, units) {
  units = normalizeUnit(units, 'ms');
  if (units === 'ms') {
    return date;
  }
  startOf(date, units);
  add(date, 1, units);
  add(date, -1, 'ms');
  return date;
}
