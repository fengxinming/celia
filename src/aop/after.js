export default function (obj, method, fn) {
  const old = obj[method];

  obj[method] = function () {
    old.apply(this, arguments);
    fn.call(this);
  };
}
