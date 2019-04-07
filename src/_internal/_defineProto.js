export default function defineProto(proto) {
  return function (name, val) {
    if (name in proto) {
      name = 'c$' + name;
    }
    Object.defineProperty(proto, name, {
      value: val,
      writable: true,
      enumerable: false,
      configurable: true
    });
  };
}
