import bindContext from './_bindContext';

export default function (value, iterator, context) {
  const cb = bindContext(iterator, context);
  for (let key in value) {
    if (cb(value[key], key) === false) {
      break;
    };
  }
};
