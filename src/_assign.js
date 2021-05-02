import isNil from './is/isNil';
import forOwn from './obj/forOwn';

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  let nextSource;
  for (let i = 1, len = arguments.length; i < len; i++) {
    // eslint-disable-next-line prefer-rest-params
    nextSource = arguments[i];
    forOwn(nextSource, (nextVal, nextKey) => {
      to[nextKey] = nextVal;
    });
  }
  return to;
}
