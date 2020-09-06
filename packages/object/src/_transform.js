export default function (each, value, iterater, accumulator) {
  each(value, function (val, index, object) {
    return iterater(accumulator, val, index, object);
  });
  return accumulator;
}
