import append from '../_internal/_array/_append';
import isString from '../isString';
import isUndefined from '../isUndefined';

function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

const rParser = /([^=?&]+)=?([^&]*)/g;
const { isArray } = Array;

export default function (query) {
  const result = {};
  if (isString(query)) {
    let part;
    while ((part = rParser.exec(query))) {
      const key = part[1];
      if (part[0] !== key) {
        const value = part[2];
        const last = result[key];
        // 没有相同的key值
        if (isUndefined(last)) {
          result[key] = decode(value);
        } else if (isArray(last)) { // 继续追加
          append(last, decode(value));
        } else { // 已存在key
          result[key] = [last, decode(value)];
        }
      }
    }
  }
  return result;
}
