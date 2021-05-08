import isFunction from '../is/isFunction';
import isArrayLike from '../is/isArrayLike';
import isNumber from '../is/isNumber';
import transIndex from '../other/transIndex';
import _forEach from '../_forEach';
import _forNumber from '../_forNumber';

const { min } = Math;
export default function forEach(value, start, end, iterator) {
  if (isArrayLike(value)) {
    const len = value.length;
    if (isFunction(start)) {
      return _forEach(value, 0, len, start);
    }
    if (isFunction(end)) {
      return _forEach(value, isNumber(start) ? transIndex(start, len) : 0, len, end);
    }
    if (isFunction(iterator)) {
      return _forEach(
        value,
        isNumber(start) ? transIndex(start, len) : 0,
        isNumber(end) ? min(end, len) : len,
        iterator
      );
    }
  }
  else if (isNumber(value)) {
    if (isFunction(start)) {
      return _forNumber(value, 1, value, start);
    }
    if (isFunction(end)) {
      return _forNumber(value, isNumber(start) ? start : 1, value, end);
    }
    if (isFunction(iterator)) {
      return _forNumber(value, isNumber(start) ? start : 1, isNumber(end) ? min(end, value) : value, iterator);
    }
  }

  return false;
}


forEach.each = _forEach;
forEach.loop = _forNumber;