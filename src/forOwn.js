import forOwn from './_internal/_forOwn';
import isObject from './isObject';

export default function (value, iterator, context) {
  return isObject(value) && forOwn(value, iterator, context);
};
