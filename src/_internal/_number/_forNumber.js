import iteratorCallback from '../_array/_iteratorCB';

export default function (value, iterator, context) {
  const cb = iteratorCallback(iterator, context);
  for (let i = 0, returnValue; returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
};
