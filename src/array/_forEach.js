export default function (value, start, end, iterator) {
  for (; start < end;) {
    iterator(value[start], start, value) === false
      ? (start = end)
      : start++;
  }
};
