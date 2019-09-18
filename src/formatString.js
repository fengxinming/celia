import isNil from './isNil';
import isObject from './isObject';

const BY_INDEX = /\{\s*(\d+)\s*\}/g;
const BY_KEY = /\{\s*(\w+)\s*\}/g;

export default function (val, arg) {

  if (val && !isNil(arg)) {
    let regexp = BY_KEY;
    if (!isObject(arg)) {
      let len = arguments.length;
      arg = [];

      while (--len) {
        arg[len - 1] = arguments[len];
      }

      regexp = BY_INDEX;
    }
    val = val.replace(regexp, function (str, index) {
      const newVal = arg[index];
      return isNil(newVal) ? str : newVal;
    });
  }
  return val;
}
