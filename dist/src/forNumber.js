import forNumber from './_internal/forNumber';

export default function (value, iterator, context) {
  return value && forNumber(value, iterator, context);
};
