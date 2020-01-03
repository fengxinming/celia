import isString from './isString';
const cache = Object.create(null);

export default function (value) {
  if (isString(value)) {
    const hit = cache[value];
    return hit || (cache[value] = value.charAt(0).toUpperCase() + value.slice(1));
  }
  return value;
}
