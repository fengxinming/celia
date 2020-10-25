import isFunction from 'celia.is/isFunction';
import _forEach from 'celia.array/_forEach';
import transIndex from 'celia.array/_transIndex';

export default function (value, start, end, iterator) {
  if (value) {
    const len = value.length;
    if (isFunction(start)) {
      iterator = start;
      start = 0;
      end = len;
    } else if (isFunction(end)) {
      iterator = end;
      end = len;
      start = transIndex(start, len);
    } else {
      start = transIndex(start, len);
      end = transIndex(end, len);
    }
    _forEach(value, start, end, iterator);
  }
};
