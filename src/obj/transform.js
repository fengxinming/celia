import transform from '../_transform';
import forOwn from '../obj/forOwn';

export default function (value, iterater, accumulator) {
  return transform(forOwn, value, iterater, accumulator);
}
