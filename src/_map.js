import isNil from './isNil';
import bindContext from './_bindContext';
import append from './_append';

export default function (method, elems, callback, context) {
  const ret = [];
  const cb = bindContext(callback, context);
  method(elems, (elem, key) => {
    elem = cb(elem, key);
    if (!isNil(elem)) {
      append(ret, elem);
    }
  });
  return ret;
}
