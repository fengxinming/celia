import isObject from '../is/isObject';
import uid from '../obj/uid';

export default function (value) {
  return isObject(value)
    ? `o${uid(value)}`
    : (typeof value)[0] + value;
}
