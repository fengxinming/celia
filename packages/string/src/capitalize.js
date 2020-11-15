import isString from 'celia.is/isString';

const cache = Object.create(null);

export default function (value) {
  if (isString(value)) {
    const hit = cache[value];
    // eslint-disable-next-line no-return-assign
    return hit || (cache[value] = value.charAt(0).toUpperCase() + value.slice(1));
  }
  return value;
}
