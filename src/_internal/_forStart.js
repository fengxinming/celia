import isFunction from '../isFunction';
import forSlice from './_forSlice';
import compareIndex from './_compareIndex';

export default function (value, start, end, iterator, context) {
  const len = value.length;
  if (isFunction(end)) {
    context = iterator;
    iterator = end;
    end = len;
  } else {
    end = compareIndex(end, len);
  }
  start = compareIndex(start, len);
  forSlice(value, start, end, iterator, context);
};
