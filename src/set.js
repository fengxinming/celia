import isNil from './isNil';
import isString from './isString';
import { PROP_NAME_REGEX, ESCAPE_CHAR_REGEX, IS_DEEP_PROP_REGEX } from './_internal/_regex';

export default function (object, path, value) {
  if (!isNil(object)) {
    if (!isString(path) || !IS_DEEP_PROP_REGEX.test(path)) {
      object[path] = value;
      return;
    }

    let part;
    let queue = [];
    let i = 0;
    let key;
    while ((part = PROP_NAME_REGEX.exec(path))) {
      const [match, number, quote, subString] = part;
      let obj;
      if (quote) {
        key = subString.replace(ESCAPE_CHAR_REGEX, '$1');
        obj = object[key];
        if (isNil(obj)) {
          obj = object[key] = {};
        }
      } else if (number) {
        obj = object[key = number];
        if (isNil(obj)) {
          obj = object[number] = [];
        }
      } else {
        obj = object[key = match];
        if (isNil(obj)) {
          obj = object[match] = {};
        }
      }
      object = obj;
      queue[i++] = obj;
    }

    object = queue[i - 2];
    object[key] = value;
  }
}
