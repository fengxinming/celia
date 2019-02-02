import { DASH_ALPHA_REGEX } from './_internal/REGEX';

export default function (value) {
  return value.replace(DASH_ALPHA_REGEX, (val, letter) => {
    return letter.toUpperCase();
  });
}
