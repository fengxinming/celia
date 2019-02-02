import forEach from '../_internal/forEach';

export default function (value, iterator, context) {
  return value && forEach(value, iterator, context);
};
