import each from './each';

export default function transform(value, iterater, accumulator) {
  each(value, function (val, index, object) {
    return iterater(accumulator, val, index, object);
  });
  return accumulator;
}
