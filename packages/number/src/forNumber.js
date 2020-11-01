import isNil from 'celia.is/isNil';
import _forNumber from 'celia.number/_forNumber';

export default function (value, iterator) {
  if (isNil(value)) {
    return value;
  }

  _forNumber(value, iterator);
}
