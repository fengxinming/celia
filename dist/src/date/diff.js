import parse from './parse';
import add from './add';
import clone from './clone';
import normalizeUnit from '../_internal/_date/_normalizeUnit';

function monthDiff(a, b) {
  const wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  const anchor = add(clone(a), wholeMonthDiff, 'months');
  let anchor2, adjust;

  if (b < anchor) {
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
    case 'Y':
      output = monthDiff(date, input) / 12;
      break;
    case 'M':
      output = monthDiff(date, input);
      break;
    case 's':
      output = (date - input) / 1000;
      break;
    case 'm':
      output = (date - input) / 60000;
      break;
    case 'h':
      output = (date - input) / 3600000;
      break;
    // case 'D':
    case 'd':
      output = (date - input) / 86400000;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}
