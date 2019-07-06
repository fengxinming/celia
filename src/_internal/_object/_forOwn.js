import _for from './_for';

export default function (value, iterator, context) {
  _for(
    function (cb, val, key) {
      if (value.hasOwnProperty(key)) {
        return cb(val, key, value);
      }
    },
    value, iterator, context
  );
};
