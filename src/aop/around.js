export default function (obj, method, fn) {
  const old = obj[method];

  obj[method] = function (...args) {
    return fn.call(this, old, args);
  };
}
