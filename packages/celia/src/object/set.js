import isNil from '../is/isNil';
import isString from '../is/isString';
import ore from './_ore';

const {
  PROP_NAME_RE,
  ESCAPE_CHAR_RE,
  IS_DEEP_PROP_RE
} = ore;

export default function (object, path, value) {
  if (!isNil(object)) {
    if (!isString(path) || !IS_DEEP_PROP_RE.test(path)) {
      object[path] = value;
      return;
    }

    let part;
    const queue = [];
    let i = 0;
    let key;

    PROP_NAME_RE.lastIndex = 0;
    while ((part = PROP_NAME_RE.exec(path))) {
      const [match, number, quote, subString] = part;
      let obj;
      if (quote) {
        key = subString.replace(ESCAPE_CHAR_RE, '$1');
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
