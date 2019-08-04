
import isNil from './isNil';
import loop from './_loop';
import forOwn from './_forOwn';

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  loop(arguments, 1, arguments.length, (nextSource) => {
    !isNil(nextSource) && forOwn(nextSource, (nextVal, nextKey) => {
      to[nextKey] = nextVal;
    });
  });
  return to;
};
