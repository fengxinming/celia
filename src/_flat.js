import isArrayLike from './is/isArrayLike';
import loop from './_loop';

function append(arr, obj) {
  arr[arr.length] = obj;
}

export default function flatten(arr, result, depth) {
  loop(0, arr.length, (n) => {
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
      loop(0, n.length, (m) => {
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
