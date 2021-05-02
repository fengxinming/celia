import removeAt from '../_removeAt';

const { isArray } = Array;

export default function (elems, value) {
  if (isArray(elems)) {
    const index = elems.indexOf(value);
    if (index > -1) {
      return removeAt(elems, index);
    }
  }
  return null;
}
