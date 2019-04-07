import forOwn from '../_internal/_object/_forOwn';
import isObject from '../isObject';

export default function (value, iterator, context) {
  return isObject(value) && forOwn(value, iterator, context);
};
