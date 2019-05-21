import isNumber from './isNumber';

let { isInteger } = Number;

if (!isInteger) {
  isInteger = function (value) {
    return isNumber(value) &&
      isFinite(value) &&
      (value >> 0) === value;
  };
}

export default function (value) {
  return isInteger(value);
}
