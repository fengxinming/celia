import isNil from '../isNil';
import iteratorCallback from './_array/_iteratorCB';
import append from './_array/_append';

export default function (method, elems, callback, context) {
  const ret = [];
  const cb = iteratorCallback(callback, context);
  method(elems, (elem, key) => {
    elem = cb(elem, key);
    if (!isNil(elem)) {
      append(ret, elem);
    }
  });
  return ret;
}
