export default function (value, start, end, iterator) {
  for (; start < end; start++) {
    if (iterator(value[start], start, value) === false) {
      break;
    }
  }
};
