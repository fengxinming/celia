import isNil from '../is/isNil';
import forOwn from './_forOwn';

export default function (value, iterator, context) {
  !isNil(value) && forOwn(value, iterator, context);
};
