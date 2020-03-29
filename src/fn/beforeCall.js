import isObject from '../is/isObject';

export default function (obj, methodName, before) {
  if (isObject(obj)) {
    const old = obj[methodName];

    obj[methodName] = function (...args) {
      const ret = before.apply(this, args);
      return old.call(this, args, ret);
    };
  }
}
