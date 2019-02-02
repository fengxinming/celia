import inArray from './inArray';

export default function (elems, value) {
  let index = inArray(value, elems);
  if (index >= 0) {
    elems.splice(index, 1);
  }
  return value;
}
