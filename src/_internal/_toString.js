const toString = Object.prototype.toString;

export default function (value) {
  return toString.call(value);
}
