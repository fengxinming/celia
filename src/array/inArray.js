
import compareIndex from '../_internal/_compareIndex';

export default function (elem, arr, fromIndex) {
  if (arr) {
    if (arr.indexOf) {
      return arr.indexOf(elem, fromIndex);
    }
    const len = arr.length;
    let i = fromIndex ? compareIndex(fromIndex, len) : 0;
    for (; i < len; i++) {
      if (i in arr && arr[i] === elem) {
        return i;
      }
    }
  }
  return -1;
}
