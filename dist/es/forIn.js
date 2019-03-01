import forIn from './_internal/_forIn';

export default function (value, iterator, context) {
  return value && forIn(value, iterator, context);
};
