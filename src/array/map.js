import each from '../each';
import isNil from '../isNil';
import iteratorCallback from '../_internal/_iteratorCB';
import append from '../_internal/_append';

export default function (elems, callback, context) {
  const ret = [];
  const cb = iteratorCallback(callback, context);
  each(elems, (elem) => {
    elem = cb(elem);
    if (!isNil(elem)) {
      append(ret, elem);
    }
  });
  return ret;
}
