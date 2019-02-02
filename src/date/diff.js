import parse from './parse';
import add from './add';
import clone from './clone';
import normalizeUnit from '../_internal/normalizeUnit';
import {
  YEAR,
  MONTH,
  DAY,
  HOUR,
  MINUTE,
  SECOND
} from '../_internal/UNIT';

function monthDiff(a, b) {
  const wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  const anchor = add(clone(a), wholeMonthDiff, 'months');
  let anchor2, adjust;

  if (b - anchor < 0) {
    anchor2 = add(clone(a), wholeMonthDiff - 1, 'months');
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = add(clone(a), wholeMonthDiff + 1, 'months');
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}

function absFloor(number) {
  return number < 0 ? (Math.ceil(number) || 0) : Math.floor(number);
}

export default function (date, input, units, asFloat) {
  input = parse(input);
  let output;
  units = normalizeUnit(units);

  switch (units) {
    case YEAR:
      output = monthDiff(date, input) / 12;
      break;
    case MONTH:
      output = monthDiff(date, input);
      break;
    case SECOND:
      output = (date - input) / 1000;
      break;
    case MINUTE:
      output = (date - input) / 60000;
      break;
    case HOUR:
      output = (date - input) / 3600000;
      break;
    case DAY:
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}
