import forSlice from './_forSlice';

export default function (value, iterator, context) {
  forSlice(value, 0, value.length, iterator, context);
};
