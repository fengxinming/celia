
import isNil from '../isNil';
import forSlice from '../_internal/_array/_forSlice';
import forOwn from '../forOwn';

export default Object.assign || function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  let to = Object(target);

  forSlice(arguments, 1, arguments.length, (nextSource) => {

    forOwn(nextSource, (nextVal, nextKey) => {
      to[nextKey] = nextVal;
    });

  });
  return to;
};
