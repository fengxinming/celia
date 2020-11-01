import isNil from 'celia.is/isNil';
import isArrayLike from 'celia.is/isArrayLike';
import isNumber from 'celia.is/isNumber';
import forEach from 'celia.array/_forEach';
import forOwn from 'celia.object/_forOwn';
import forNumber from 'celia.number/_forNumber';

export default function (value, cb) {
  if (isArrayLike(value)) {
    forEach(value, 0, value.length, cb);
  } else if (isNumber(value)) {
    forNumber(value, cb);
  } else if (!isNil(value)) {
    forOwn(value, cb);
  }
};
