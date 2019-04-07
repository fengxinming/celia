import forSlice from '../_internal/_array/_forStart';

export default function (value, start, end, iterator, context) {
  if (value) {
    forSlice(value, start, end, iterator, context);
  }
};
