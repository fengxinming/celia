
export default function (elem, arr, fromIndex) {
  if (arr) {
    if (arr.indexOf) {
      return arr.indexOf(elem, fromIndex);
    }
    const len = arr.length;
    let i = fromIndex ? fromIndex < 0 ? Math.max(0, len + fromIndex) : fromIndex : 0;
    for (; i < len; i++) {
      if (i in arr && arr[i] === elem) {
        return i;
      }
    }
  }
  return -1;
}
