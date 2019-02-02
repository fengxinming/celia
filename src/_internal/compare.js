import parse from '../date/parse';
import clone from '../date/clone';
import startOf from '../date/startOf';
import endOf from '../date/endOf';
import normalizeUnit from './normalizeUnit';
import {
  MILLISECOND
} from './UNIT';
import isUndefined from '../isUndefined';

export default function (date, input, units, type) {
  input = parse(input);
  units = normalizeUnit(!isUndefined(units) ? units : MILLISECOND);
  if (units === MILLISECOND) {
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
