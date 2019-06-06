import isFunction from './isFunction';

export default function (value) {
  return !!value &&
    isFunction(value.then) &&
    isFunction(value.catch);
}
