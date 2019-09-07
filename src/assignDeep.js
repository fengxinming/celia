
import isNil from './isNil';
import isObject from './isObject';
import loop from './_loop';
import forOwn from './_forOwn';

function assign(target, nextSource) {
  let copy;
  !isNil(nextSource) && forOwn(nextSource, (nextVal, nextKey) => {
    copy = target[nextKey];
    isObject(copy) && isObject(nextVal)
      ? assign(copy, nextVal)
      : (target[nextKey] = nextVal);
  });
};

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  loop(arguments, 1, arguments.length, (nextSource) => {
    assign(to, nextSource);
  });
  return to;
};
