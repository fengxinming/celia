import { newIterator } from './func';

export default function (value, iterator, context) {
  const cb = newIterator(iterator, context);
  for (let key in value) {
    if (cb(value[key], key, value) === false) {
      break;
    };
  }
};
