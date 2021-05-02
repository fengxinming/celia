import isNumber from './is/isNumber';

export default function _isInteger(value) {
  return isNumber(value)
    && isFinite(value)
    // eslint-disable-next-line no-bitwise
    && (value >> 0) === value;
}
