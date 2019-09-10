import isObject from './isObject';

export default function (obj, methodName, after) {
  if (isObject(obj)) {
    const old = obj[methodName];

    obj[methodName] = function (...args) {
      const ret = old.apply(this, args);
      return after.apply(this, args, ret);
    };
  }
}
