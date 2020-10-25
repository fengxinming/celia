import isObject from 'celia.is/isObject';
import assign from 'celia.object/assign';
import forOwn from 'celia.object/forOwn';

const { isArray } = Array;

function copy(value) {
  return isObject(value) ? assign({}, value) : value;
}

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
