import parse from '../../date/parse';
import clone from '../../date/clone';
import startOf from '../../date/startOf';
import endOf from '../../date/endOf';
import normalizeUnit from './_normalizeUnit';

export default function (date, input, units, type) {
  input = parse(input);
  units = normalizeUnit(units, 'ms');
  if (units === 'ms') {
    switch (type) {
      case 'before':
        return +date < +input;
      case 'after':
        return +date > +input;
      default:
        return +date === +input;
    }
  } else {
    const inputMs = +input;
    switch (type) {
      case 'before':
        return +endOf(clone(date), units) < inputMs;
      case 'after':
        return +startOf(clone(date), units) > inputMs;
      default:
        return +startOf(clone(date), units) <= inputMs && inputMs <= +endOf(clone(date), units);
    }
  }
}
