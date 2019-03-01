import normalizeUnit from '../_internal/_date/_normalizeUnit';

export default function (date, units) {
  units = normalizeUnit(units);
  switch (units) {
    case 'Y':
      date.setMonth(0);
    /* falls through */
    case 'M':
      date.setDate(1);
    /* falls through */
    case 'D':
    case 'd':
      date.setHours(0);
    /* falls through */
    case 'h':
      date.setMinutes(0);
    /* falls through */
    case 'm':
      date.setSeconds(0);
    /* falls through */
    case 's':
      date.setMilliseconds(0);
  }

  return date;
}
