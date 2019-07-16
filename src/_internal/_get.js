import isNil from '../isNil';
import isString from '../isString';
import { PROP_NAME_REGEX, ESCAPE_CHAR_REGEX, IS_DEEP_PROP_REGEX } from './_regex';

export default function (object, path) {
  if (!isString(path) || !IS_DEEP_PROP_REGEX.test(path)) {
    return object[path];
  }

  let part;
  while (!isNil(object) && (part = PROP_NAME_REGEX.exec(path))) {
    const [match, number, quote, subString] = part;
    const prop = quote ? subString.replace(ESCAPE_CHAR_REGEX, '$1') : (number || match);
    object = object[prop];
  }
  return object;
}
