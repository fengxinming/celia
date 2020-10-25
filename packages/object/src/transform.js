import transform from 'celia.object/_transform';
import forOwn from 'celia.object/forOwn';

export default function (value, iterater, accumulator) {
  return transform(forOwn, value, iterater, accumulator);
}
