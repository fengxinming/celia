import forIn from './_internal/_forIn';
import isObject from './isObject';

export default function (value, iterator, context) {
  return isObject(value) && forIn(value, iterator, context);
};
