export default function _to(start, end, callback) {
  for (let i = 0; start <= end; i++, start++) {
    callback(start, i, end);
  }
}
