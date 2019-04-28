import isNil from './isNil';
import isUndefined from './isUndefined';

const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reEscapeChar = /\\(\\)?/g;

export default function (object, path, defaultValue) {
  let part;
  while (!isNil(object) && (part = rePropName.exec(path))) {
    const [match, number, quote, subString] = part;
    const prop = quote ? subString.replace(reEscapeChar, '$1') : (number || match);
    object = object[prop];
  }
  return isUndefined(object) ? defaultValue : object;
}
