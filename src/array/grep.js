export default function (elems, callback, invert) {
  let matches = [];
  let i = 0;
  const length = elems.length;
  const isOpposite = !invert; // 是否取反向结果

  for (; i < length; i++) {
    if (!callback(elems[i], i) !== isOpposite) {
      matches.push(elems[i]);
    }
  }
  return matches;
}
