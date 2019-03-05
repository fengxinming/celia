import isNil from './isNil';
import isFunction from './isFunction';
import isNumber from './isString';

export default function (value) {
  return !isNil(value) && isNumber(value.length) && !isFunction(value);
};
