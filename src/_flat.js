import isArrayLike from './is/isArrayLike';
import loop from './_loop';

function append(arr, obj) {
  arr[arr.length] = obj;
}

export default function flatten(arr, result, depth) {
  loop(arr, 0, arr.length - 1, (n) => {
    n = arr[n];
    if (depth > 0) {
      if (isArrayLike(n)) {
        flatten(n, result, --depth);
      }
      else {
        append(result, n);
      }
    }
    else if (isArrayLike(n)) {
      loop(n, 0, n.length - 1, (m) => {
        m = n[m];
        append(result, m);
      });
    }
    else {
      append(result, n);
    }
  });
  return result;
}
