import _forEach from './_forEach';
import transIndex from './_transIndex';
import isFunction from '../is/isFunction';

export default function (value, start, end, iterator) {
  if (value) {
    const len = value.length;
    if (isFunction(start)) { // forEach like
      _forEach(value, 0, len, start);
    } else if (isFunction(end)) {
      _forEach(value, transIndex(start, len), len, end);
    } else {
      _forEach(value, transIndex(start, len), transIndex(end, len), iterator);
    }
  }
};
