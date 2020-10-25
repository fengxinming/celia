import remove from 'celia.array/_remove';

const { isArray } = Array;
export default function (elems, value) {
  if (isArray(elems)) {
    return remove(elems, value);
  }
  return null;
}
