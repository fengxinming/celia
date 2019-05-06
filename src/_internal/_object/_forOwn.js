import _for from './_for';

export default function (value, iterator, context) {
  _for(
    (cb, val, key) => value.hasOwnProperty(key) && cb(val, key, value),
    value, iterator, context
  );
};
