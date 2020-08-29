const { hasOwnProperty } = Object.prototype;

export default function (obj, key) {
  return hasOwnProperty.call(obj, key);
}
