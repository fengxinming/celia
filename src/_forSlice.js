import bindContext from './_bindContext';

export default function (value, start, end, iterator, context) {
  const cb = bindContext(iterator, context);
  for (let i = start, returnValue; returnValue !== false && i < end; i++) {
    returnValue = cb(value[i], i, value);
  }
};
