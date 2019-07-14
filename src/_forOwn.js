import forSlice from './_forSlice';
import bindContext from './_bindContext';

export default function (value, iterator, context) {
  iterator = bindContext(iterator, context);
  const keys = Object.keys(value);
  forSlice(Object.keys(value), 0, keys.length, function (key) {
    return iterator(value[key], key);
  });
};
