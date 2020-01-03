import isString from './isString';

const DASH_ALPHA_REGEX = /[-_. ]+([a-z])/g;
const cache = Object.create(null);

export default function (value) {
  if (isString(value)) {
    const hit = cache[value];
    return hit || (cache[value] = value.replace(DASH_ALPHA_REGEX, (val, letter) => {
      return letter.toUpperCase();
    }));
  }
  return value;
}
