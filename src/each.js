import isArrayLike from './isArrayLike';
import isNumber from './isNumber';
import isObject from './isObject';
import isFunction from './isFunction';
import forEach from './_forEach';
import forOwn from './_forOwn';
import forNumber from './_forNumber';

export default function (value, cb, context) {
  if (isArrayLike(value)) {
    forEach(value, cb, context);
  } else if (isObject(value) || isFunction(value)) {
    forOwn(value, cb, context);
  } else if (isNumber(value)) {
    forNumber(value, cb, context);
  }
};
