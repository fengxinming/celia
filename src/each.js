import isArrayLike from './isArrayLike';
import isNumber from './isNumber';
import forEach from './_internal/_array/_forEach';
import forOwn from './_internal/_object/_forOwn';
import forNumber from './_internal/_number/_forNumber';

export default function (arr, cb, context) {
  if (arr) {
    if (isArrayLike(arr)) {
      forEach(arr, cb, context);
    } else if (isNumber(arr)) {
      forNumber(arr, cb, context);
    } else {
      forOwn(arr, cb, context);
    }
  }
};
