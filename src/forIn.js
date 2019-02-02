import forIn from './_internal/forIn';

export default function (value, iterator, context) {
  return value && forIn(value, iterator, context);
};
