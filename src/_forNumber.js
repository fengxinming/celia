import bindContext from './_bindContext';

export default function (value, iterator, context) {
  const cb = bindContext(iterator, context);
  for (let i = 0, returnValue; returnValue !== false && i < value; i++) {
    returnValue = cb(i, i, i);
  }
};
