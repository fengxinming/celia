import isNil from './isNil';

const toString = Object.prototype.toString;

export default function (value) {
  return !isNil(value) && toString.call(value) === '[object Object]';
}
