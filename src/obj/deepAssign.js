import isNil from '../is/isNil';
import isObject from '../is/isObject';
import forOwn from '../obj/forOwn';

function assign(target, nextSource) {
  let copy;
  if (isNil(nextSource)) {
    return;
  }
  forOwn(nextSource, (nextVal, nextKey) => {
    copy = target[nextKey];
    if (isObject(copy) && isObject(nextVal)) {
      assign(copy, nextVal);
    }
    else {
      target[nextKey] = nextVal;
    }
  });
}

export default function (target) {
  if (isNil(target)) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const to = Object(target);
  let nextSource;

  for (let i = 1, len = arguments.length; i < len; i++) {
    // eslint-disable-next-line prefer-rest-params
    nextSource = arguments[i];
    assign(to, nextSource);
  }
  return to;
}
