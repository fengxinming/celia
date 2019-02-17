import each from '../each';
import isNil from '../isNil';
import { newIterator } from '../_internal/func';

export default function (elems, callback, context) {
  const ret = [];
  const cb = newIterator(callback, context);
  each(elems, (elem) => {
    elem = cb(elem);
    if (!isNil(elem)) {
      ret[ret.length] = elem;
    }
  });
  return ret;
}
