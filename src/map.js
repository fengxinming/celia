import each from './each';
import isNil from './is/isNil';
import append from './array/_append';

export default function (elems, callback) {
  const ret = [];
  each(elems, (elem, key) => {
    elem = callback(elem, key);
    !isNil(elem) && append(ret, elem);
  });
  return ret;
}
