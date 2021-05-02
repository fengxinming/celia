import isNil from '../is/isNil';
import isArrayLike from '../is/isArrayLike';
import isNumber from '../is/isNumber';
import forEach from '../_forEach';
import forOwn from '../_forOwn';
import forNumber from '../_forNumber';

export default function (value, cb) {
  if (isArrayLike(value)) {
    forEach(value, 0, value.length, cb);
  }
  else if (isNumber(value)) {
    forNumber(value, 1, value, cb);
  }
  else if (!isNil(value)) {
    forOwn(value, cb);
  }
}
