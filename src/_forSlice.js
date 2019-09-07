import bindContext from './_bindContext';

export default function (value, start, end, iterator, context) {
  iterator = bindContext(iterator, context);
  for (let i = start; i < end; i++) {
    iterator(value[i], i, value) === false && (i = end);
  }
};
