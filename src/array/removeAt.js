import removeAt from '../_internal/_array/_removeAt';

const { isArray } = Array;
export default function (elems, index) {
  if (elems && isArray(elems)) {
    return removeAt(elems, index);
  }
  return null;
}
