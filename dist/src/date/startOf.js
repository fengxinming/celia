import normalizeUnit from '../_internal/normalizeUnit';
import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND
} from '../_internal/UNIT';

export default function (date, units) {
  units = normalizeUnit(units);
  switch (units) {
    case YEAR:
      date.setMonth(0);
    /* falls through */
    case MONTH:
      date.setDate(1);
    /* falls through */
    case DAY:
      date.setHours(0);
    /* falls through */
    case HOUR:
      date.setMinutes(0);
    /* falls through */
    case MINUTE:
      date.setSeconds(0);
    /* falls through */
    case SECOND:
      date.setMilliseconds(0);
  }

  return date;
}
