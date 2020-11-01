import flatten from 'celia.array/_flatten';

export default function (arr, depth) {
  if (arr) {
    return arr.flat 
      ? arr.flat(depth || 1) 
      : flatten(arr, [], depth || 1);
  }
  return [];
}
