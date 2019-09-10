import isObject from './isObject';
import getUid from './getUid';

export default function (value) {
  return isObject(value)
    ? 'o' + getUid(value)
    : (typeof value)[0] + value;
}
