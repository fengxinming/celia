
import compareIndex from '../_compareIndex';

export default function (arr, elem, fromIndex) {
  const len = arr.length;
  let i = fromIndex ? compareIndex(fromIndex, len) : 0;
  for (; i < len; i++) {
    if (i in arr && arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
