import { DASH_ALPHA_REGEX } from './_internal/_regex';
import isString from './isString';

export default function (value) {
  if (isString(value)) {
    return value.replace(DASH_ALPHA_REGEX, (val, letter) => {
      return letter.toUpperCase();
    });
  }
  return value;
}
