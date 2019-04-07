import forEach from './forEach';
import append from '../_internal/_array/_append';

export default function (elems, callback, isOpposite) {
  let matches = [];
  isOpposite = !!isOpposite;
  forEach(elems, (elem, i) => {
    if (!callback(elem, i) === isOpposite) {
      append(matches, elem);
    }
  });
  return matches;
}
