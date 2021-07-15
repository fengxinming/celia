export default function _loop(start, end, iterator) {
  for (let i = 0; start < end; i++, start++) {
    iterator(start, i);
  }
}
