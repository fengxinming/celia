import { newIterator } from './func';

export default function (value, iterator, context) {
  const cb = newIterator(iterator, context);
  for (let i = 0, returnValue; returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
};
