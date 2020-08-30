import isNil from 'celia.is/isNil';
import isObject from 'celia.is/isObject';
import forOwn from './forOwn';

function assign(target, nextSource) {
  let copy;
  if (isNil(nextSource)) {
    return;
  }
  forOwn(nextSource, (nextVal, nextKey) => {
    copy = target[nextKey];
    if (isObject(copy) && isObject(nextVal)) {
      assign(copy, nextVal);
    } else {
      target[nextKey] = nextVal;
    }
  });
};

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  for (let i = 1, len = arguments.length; i < len; i++) {
    const nextSource = arguments[i];
    assign(to, nextSource);
  }
  return to;
};
