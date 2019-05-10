import isNil from './isNil';
import isUndefined from './isUndefined';
import { PROP_NAME_REGEX, ESCAPE_CHAR_REGEX } from './_internal/_regex';

export default function (object, path, defaultValue) {
  let part;
  while (!isNil(object) && (part = PROP_NAME_REGEX.exec(path))) {
    const [match, number, quote, subString] = part;
    const prop = quote ? subString.replace(ESCAPE_CHAR_REGEX, '$1') : (number || match);
    object = object[prop];
  }
  return isUndefined(object) ? defaultValue : object;
}
