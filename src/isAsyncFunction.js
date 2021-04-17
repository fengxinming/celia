const { toString } = Object.prototype;

export default function (value) {
  return toString.call(value) === '[object AsyncFunction]';
}
