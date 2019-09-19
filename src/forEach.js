import forSlice from './_forSlice';

export default function (arr, cb, ctx) {
  if (arr) {
    forSlice(arr, 0, arr.length, cb, ctx);
  }
};
