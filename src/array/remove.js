import remove from '../_internal/_array/_remove';

const { isArray } = Array;
export default function (elems, value) {
  if (elems && isArray(elems)) {
    return remove(elems, value);
  }
  return null;
}
