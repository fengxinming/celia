import isString from '../isString';
import isUndefined from '../isUndefined';
import append from '../_internal/_array/_append';

function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

const { isArray } = Array;

export default function (query, sep = '&', eq = '=') {
  const result = {};
  if (isString(query)) {
    query.split(sep).forEach((n) => {
      let [key, value] = n.split(eq);
      const cache = result[key];
      if (isUndefined(cache)) {
        result[key] = decode(value);
      } else if (isArray(cache)) {
        append(cache, decode(value));
      } else {
        result[key] = [cache, decode(value)];
      }
    });
  }
  return result;
}
