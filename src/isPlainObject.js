const { toString } = Object.prototype;

export default function (value) {
  return !!value && toString.call(value) === '[object Object]';
}
