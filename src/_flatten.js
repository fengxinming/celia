import iterate from './_iterate';
import append from './_append';

const { isArray } = Array;

export default function flatten(arr, result, depth) {
  iterate(arr, 0, arr.length, (n) => {
    if (depth > 0) {
      if (isArray(n)) {
        flatten(n, result, --depth);
      } else {
        append(result, n);
      }
    } else {
      if (isArray(n)) {
        iterate(n, 0, n.length, (m) => {
          append(result, m);
        });
      } else {
        append(result, n);
      }
    }
  });
  return result;
}
