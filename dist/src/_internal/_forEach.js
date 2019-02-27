import iteratorCallback from './_iteratorCB';

export default function (value, iterator, context) {
  const cb = iteratorCallback(iterator, context);
  for (let i = 0, len = value.length, returnValue; returnValue !== false && i < len; i++) {
    returnValue = cb(value[i], i, value);
  }
};
