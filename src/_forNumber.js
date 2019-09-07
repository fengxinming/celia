import bindContext from './_bindContext';

export default function (value, iterator, context) {
  iterator = bindContext(iterator, context);
  for (let i = 0; i < value; i++) {
    iterator(i, i, value) === false && (i = value);
  }
};
