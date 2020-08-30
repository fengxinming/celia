import isNil from 'celia.is/isNil';
import isString from 'celia.is/isString';
import ore from './_ore';

const {
  PROP_NAME_RE,
  ESCAPE_CHAR_RE,
  IS_DEEP_PROP_RE
} = ore;

export default function (object, path, value) {
  let target = object;

  if (isNil(target)) {
    return object;
  }

  if (!isString(path) || !IS_DEEP_PROP_RE.test(path)) {
    target[path] = value;
    return object;
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
      obj = target[key];
      if (isNil(obj)) {
        obj = target[key] = {};
      }
    } else if (number) {
      obj = target[key = number];
      if (isNil(obj)) {
        obj = target[number] = [];
      }
    } else {
      obj = target[key = match];
      if (isNil(obj)) {
        obj = target[match] = {};
      }
    }
    target = obj;
    queue[i++] = obj;
  }

  target = queue[i - 2];
  target[key] = value;

  return object;
}
