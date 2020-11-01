import flatten from 'celia.array/flat';

export default function (arr) {
  return flatten(arr, Infinity);
}
