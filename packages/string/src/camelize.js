import isString from 'celia.is/isString';

const DASH_ALPHA_REGEX = /[-_. ]+([a-z])/g;
const cache = Object.create(null);

export default function (value) {
  if (isString(value)) {
    const hit = cache[value];
    // eslint-disable-next-line no-return-assign
    return hit
      || (cache[value] = value.replace(DASH_ALPHA_REGEX, (val, letter) => letter.toUpperCase()));
  }
  return value;
}
