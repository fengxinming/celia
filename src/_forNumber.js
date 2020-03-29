export default function (value, iterator) {
  for (let i = 0; i < value;) {
    iterator(i, i, value) === false
      ? (i = value)
      : i++;
  }
};
