import each from './each';
import isNil from '../is/isNil';

export default function (elems, callback) {
  const ret = [];
  each(elems, (elem, key) => {
    elem = callback(elem, key);
    if (!isNil(elem)) {
      ret[ret.length] = elem;
    }
  });
  return ret;
}
