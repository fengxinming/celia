import forEach from './_internal/_array/_forEach';

export default function (value, iterator, context) {
  return value && forEach(value, iterator, context);
};
