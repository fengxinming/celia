export default function _forNumber(value, start, end, iterator) {
  const ret = start <= end;
  for (let i = 0; start <= end; i++, start++) {
    if (iterator(start, i, value) === false) {
      break;
    }
  }

  return ret;
}
