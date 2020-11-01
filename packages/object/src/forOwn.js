import isNil from 'celia.is/isNil';
import _forOwn from 'celia.object/_forOwn';

export default function (object, iterator) {
  if (isNil(object)) {
    return object;
  }

  _forOwn(object, iterator);
}
