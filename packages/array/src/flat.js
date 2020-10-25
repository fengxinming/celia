import flatten from 'celia.array/_flatten';

export default function (arr, depth) {
  if (arr) {
    return flatten(arr, [], depth || 1);
  }
  return [];
}
