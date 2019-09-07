import isObject from './isObject';

export default function (obj, method, around) {
  if (isObject(obj)) {
    const old = obj[method];

    obj[method] = function (...args) {
      return around.call(this, old, args);
    };
  }
}
