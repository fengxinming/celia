import each from './forOwn';
import isNil from './isNil';
import bindContext from './_bindContext';

export default function (elems, callback, context) {
  const ret = {};
  const cb = bindContext(callback, context);
  each(elems, (elem, key) => {
    elem = cb(elem, key);
    !isNil(elem) && (ret[key] = elem);
  });
  return ret;
}
