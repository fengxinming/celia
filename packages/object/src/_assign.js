import isNil from 'celia.is/isNil';
import forOwn from './forOwn';

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  for (let i = 1, len = arguments.length; i < len; i++) {
    const nextSource = arguments[i];
    forOwn(nextSource, (nextVal, nextKey) => {
      to[nextKey] = nextVal;
    });
  }
  return to;
};
