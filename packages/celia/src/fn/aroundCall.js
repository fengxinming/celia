import isObject from '../is/isObject';

export default function (obj, methodName, around) {
  if (isObject(obj)) {
    const old = obj[methodName];

    obj[methodName] = function (...args) {
      return around.call(this, args, old);
    };
  }
}
