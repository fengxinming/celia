
import isNil from './isNil';
import isObject from './isObject';
import forSlice from './_forSlice';
import forOwn from './_forOwn';

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  forSlice(arguments, 1, arguments.length, (nextSource) => {
    if (isObject(nextSource)) {
      forOwn(nextSource, (nextVal, nextKey) => {
        to[nextKey] = nextVal;
      });
    }
  });
  return to;
};
