import assign from '../object/assign';
import isUndefined from '../isUndefined';

export default function defineProto(proto, isDOM) {
  return function (name, options) {
    if (name in proto) {
      name = 'c$' + name;
    }
    if (isDOM) {
      if (!isUndefined(options.value) && isUndefined(options.writable)) {
        options.writable = true;
      }
      Object.defineProperty(proto, name, assign({
        enumerable: false,
        configurable: true
      }, options));
    } else {
      proto[name] = options;
    }
  };
}
