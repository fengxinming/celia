import forSlice from './_internal/_forSlice';
import isFunction from './isFunction';

export default function (value, start, end, iterator, context) {
  if (value) {
    if (isFunction(end)) {
      context = iterator;
      iterator = end;
      end = value.length;
    }
    forSlice(value, start, end || value.length, iterator, context);
  }
};
