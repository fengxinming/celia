import isNil from '../is/isNil';

const BY_KEY = /\{\s*(\w+)\s*\}/g;

export default function (val, arg) {
  if (val && !isNil(arg)) {
    const regexp = BY_KEY;
    val = val.replace(regexp, function (str, k) {
      const newVal = arg[k];
      return isNil(newVal) ? str : newVal;
    });
  }
  return val;
}
