export default function _forEach(value, start, end, iterator) {
  const ret = start < end;
  for (; start < end; start++) {
    if (iterator(value[start], start, value) === false) {
      break;
    }
  }

  return ret;
}
