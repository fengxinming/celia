import isArrayLike from 'celia.is/isArrayLike';
import forEach from './_forEach';
import append from './_append';

export default function flatten(arr, result, depth) {
  forEach(arr, 0, arr.length, (n) => {
    if (depth > 0) {
      if (isArrayLike(n)) {
        flatten(n, result, --depth);
      } else {
        append(result, n);
      }
    } else {
      if (isArrayLike(n)) {
        forEach(n, 0, n.length, (m) => {
          append(result, m);
        });
      } else {
        append(result, n);
      }
    }
  });
  return result;
}
