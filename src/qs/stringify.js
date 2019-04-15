import forOwn from '../object/forOwn';
import isNil from '../isNil';
import append from '../_internal/_array/_append';

export default function stringify(obj, sep = '&', eq = '=') {
  let arr = [];
  forOwn(obj, (value, key) => {
    if (!value && (isNil(value) || isNaN(value))) {
      value = '';
    }
    append(arr, encodeURIComponent(key) + eq + encodeURIComponent(value));
  });
  return arr.length ? arr.join(sep) : '';
}
