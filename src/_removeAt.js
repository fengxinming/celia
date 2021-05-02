export default function (elems, index) {
  const ret = elems.splice(index, 1);
  return ret.length ? ret[0] : null;
}
