import isObject from './isObject';

export default function (obj, methodName, after) {
  if (isObject(obj)) {
    const old = obj[methodName];

    obj[methodName] = function () {
      old.apply(this, arguments);
      return after.apply(this, arguments);
    };
  }
}
