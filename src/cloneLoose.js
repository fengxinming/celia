import isObject from './isObject';
import assign from './assign';
import forOwn from './_forOwn';

function copy(value) {
  return isObject(value)
    ? assign({}, value)
    : value;
}

const { isArray } = Array;
function copyDeep(value) {
  let target = value;
  if (isArray(value)) {
    target = [];
    value.forEach((val, i) => {
      target[i] = copyDeep(val);
    });
  } else if (isObject(value)) {
    target = {};
    forOwn(value, (val, key) => {
      target[key] = copyDeep(val);
    });
  }
  return target;
}

export default function (value, deep) {
  return deep ? copyDeep(value) : copy(value);
}
