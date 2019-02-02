import isFunction from '../utils/isFunction';

export default function (value) {
  return value && isFunction(value.then);
}
