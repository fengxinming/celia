import isNil from './isNil';
import isFunction from './isFunction';

const isArray = Array.isArray;

export default function (value) {
  if (isNil(value) || isFunction(value)) {
    return false;
  }
  const length = value.length;
  return isArray(value) || length === 0 || (+length > 0 && (length - 1) in value);
};
