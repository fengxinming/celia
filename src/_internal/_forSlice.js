import iteratorCallback from './_array/_iteratorCB';

export default function (value, start, end, iterator, context) {
  const cb = iteratorCallback(iterator, context);
  for (let i = start, returnValue; returnValue !== false && i < end; i++) {
    returnValue = cb(value[i], i, value);
  }
};
