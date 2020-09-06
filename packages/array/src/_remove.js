import removeAt from './_removeAt';

export default function (elems, value) {
  const index = elems.indexOf(value);
  if (index > -1) {
    return removeAt(elems, index);
  }
  return null;
}
