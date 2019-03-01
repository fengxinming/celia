export default function (elems, callback, isOpposite) {
  let matches = [];
  if (elems) {
    let i = 0;
    const length = elems.length;
    isOpposite = !!isOpposite;

    for (; i < length; i++) {
      if (!callback(elems[i], i) === isOpposite) {
        matches[matches.length] = elems[i];
      }
    }
  }
  return matches;
}
