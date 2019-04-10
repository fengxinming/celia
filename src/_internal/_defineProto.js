import assign from '../object/assign';
import isUndefined from '../isUndefined';

export function checkProto(proto, name) {
  if (name in proto) {
    name = 'c$' + name;
  }
  return name;
}

export default function defineProto(proto) {
  return function (name, options) {
    name = checkProto(proto, name);
    if (!isUndefined(options.value) && isUndefined(options.writable)) {
      options.writable = true;
    }
    Object.defineProperty(proto, name, assign({
      enumerable: false,
      configurable: true
    }, options));
  };
}
