import isArrayLike from '../isArrayLike';
import indexOf from '../_internal/_array/_indexOf';

const { isArray } = Array;

export default function (arr, elem, fromIndex) {
  if (isArray(arr)) {
    return arr.indexOf(elem, fromIndex);
  } else if (isArrayLike(arr)) {
    return indexOf(arr, elem, fromIndex);
  }
  return -1;
}
