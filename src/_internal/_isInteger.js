import isNumber from '../isNumber';

export default function (value) {
  return isNumber(value) &&
    isFinite(value) &&
    (value >> 0) === value;
}
