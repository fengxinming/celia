import isArrayLike from './isArrayLike';
import isNumber from './isNumber';
import forEach from './_forEach';
import forOwn from './_forOwn';
import forNumber from './_forNumber';
import isNil from './isNil';

export default function (value, cb, context) {
  if (isArrayLike(value)) {
    forEach(value, cb, context);
  } else if (isNumber(value)) {
    forNumber(value, cb, context);
  } else if (!isNil(value)) {
    forOwn(value, cb, context);
  }
};
