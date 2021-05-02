import isFunction from './isFunction';
import isNumber from './isNumber';

export default function isArrayLike(value) {
  return !!value && isNumber(value.length) && !isFunction(value);
}