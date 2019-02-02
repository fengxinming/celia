import isArrayLike from './isArrayLike';
import isNumber from './isNumber';
import forEach from './_internal/forEach';
import forIn from './_internal/forIn';
import forNumber from './_internal/forNumber';

export default function (arr, cb, context) {
  if (arr) {
    if (isArrayLike(arr)) {
      forEach(arr, cb, context);
    } else if (isNumber(arr)) {
      forNumber(arr, cb, context);
    } else {
      forIn(arr, cb, context);
    }
  }
};
