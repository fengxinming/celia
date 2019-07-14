import forOwn from '../forOwn';
import isNil from '../isNil';
import append from '../_internal/_array/_append';

function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

export default function stringify(obj, sep = '&', eq = '=') {
  let arr = [];
  forOwn(obj, (value, key) => {
    if (isNil(value) || isNaN(value)) {
      value = '';
    }

    key = encode(key);
    value = encode(value);

    if (key && value) {
      append(arr, key + eq + value);
    }
  });
  return arr.length ? arr.join(sep) : '';
}
