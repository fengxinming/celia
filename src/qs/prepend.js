import isString from '../isString';

export default function (str, prefix) {
  prefix = isString(prefix) ? prefix : '';
  return str ? prefix + str : str;
}
