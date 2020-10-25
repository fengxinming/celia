import isNil from '../is/isNil';
import isString from '../is/isString';
import ore from './_ore';

const {
  PROP_NAME_RE,
  ESCAPE_CHAR_RE,
  IS_DEEP_PROP_RE
} = ore;

export default function (object, path) {
  if (!isString(path) || !IS_DEEP_PROP_RE.test(path)) {
    return object[path];
  }

  let part;
  PROP_NAME_RE.lastIndex = 0;
  while (!isNil(object) && (part = PROP_NAME_RE.exec(path))) {
    const [match, number, quote, subString] = part;
    const prop = quote ? subString.replace(ESCAPE_CHAR_RE, '$1') : number || match;
    object = object[prop];
  }
  return object;
}
