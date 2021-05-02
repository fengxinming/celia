export default function (each, value, iterater, accumulator) {
  each(value, (val, index, object) => {
    return iterater(accumulator, val, index, object);
  });
  return accumulator;
}
