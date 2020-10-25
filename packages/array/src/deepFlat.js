import flatten from 'celia.array/flat';

export default function (arr) {
  return flatten(arr, Number.MAX_VALUE);
}
