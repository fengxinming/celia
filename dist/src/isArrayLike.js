import isNil from './isNil';
import isFunction from './isFunction';
import isNumber from './isNumber';

export default function (value) {
  return !isNil(value) && isNumber(value.length) && !isFunction(value);
};
