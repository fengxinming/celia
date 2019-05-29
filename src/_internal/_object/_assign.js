
import isNil from '../../isNil';
import forSlice from '../_array/_forSlice';
import forOwn from './_forOwn';

export default function (target) {
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
