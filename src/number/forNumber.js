import forNumber from '../_internal/_number/_forNumber';

export default function (value, iterator, context) {
  return value && forNumber(value, iterator, context);
};
