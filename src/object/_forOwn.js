import forEach from '../array/_forEach';

export default function (value, iterator) {
  const keys = Object.keys(value);
  forEach(keys, 0, keys.length, (key) => {
    return iterator(value[key], key, value);
  });
};
