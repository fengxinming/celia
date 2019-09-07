import isObject from './isObject';

export default function (obj, methodName, before) {
  if (isObject(obj)) {
    const old = obj[methodName];

    obj[methodName] = function () {
      before.apply(this, arguments);
      return old.apply(this, arguments);
    };
  }
}
