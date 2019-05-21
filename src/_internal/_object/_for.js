import iteratorCallback from '../_array/_iteratorCB';

export default function (handler, value, iterator, context) {
  const cb = iteratorCallback(iterator, context);
  for (let key in value) {
    if (handler(cb, value[key], key) === false) {
      break;
    };
  }
};
