import isObject from 'celia.is/isObject';
import uid from 'celia.object/uid';

export default function (value) {
  return isObject(value)
    ? `o${uid(value)}`
    : (typeof value)[0] + value;
}
