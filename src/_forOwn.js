import bindContext from './_bindContext';
// import hasOwn from './hasOwn';

export default function (value, iterator, context) {
  iterator = bindContext(iterator, context);
  const keys = Object.keys(value);
  const len = keys.length;
  for (let i = 0, key; i < len; i++) {
    key = keys[i];
    iterator(value[key], key, value) === false && (i = len);
  }
  // for (let key in value) {
  //   if (hasOwn(value, key) && iterator(value[key], key, value) === false) {
  //     break;
  //   }
  // }
};
