import isObject from './isObject';
import getUid from './getUid';

export default function (key) {
  return isObject(key)
    ? 'o' + getUid(key)
    : (typeof key)[0] + key;
}
