import each from 'celia.lang/each';
import isNil from 'celia.is/isNil';
import append from 'celia.array/_append';

export default function (elems, callback) {
  const ret = [];
  each(elems, (elem, key) => {
    elem = callback(elem, key);
    !isNil(elem) && append(ret, elem);
  });
  return ret;
}
