import bindContext from './_bindContext';

export default function (value, iterator, context) {
  iterator = bindContext(iterator, context);
  for (let key in value) {
    if (iterator(value[key], key) === false) {
      break;
    };
  }
};
