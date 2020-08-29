import isNil from './is/isNil';
import isArrayLike from './is/isArrayLike';
import isNumber from './is/isNumber';
import forEach from './array/_forEach';
import forOwn from './object/_forOwn';
import forNumber from './_forNumber';

export default function (value, cb) {
  if (isArrayLike(value)) {
    forEach(value, 0, value.length, cb);
  } else if (isNumber(value)) {
    forNumber(value, cb);
  } else if (!isNil(value)) {
    forOwn(value, cb);
  }
};
