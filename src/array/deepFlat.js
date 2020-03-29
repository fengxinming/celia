import flatten from './flat';

export default function (arr) {
  return flatten(arr, Number.MAX_VALUE);
}
