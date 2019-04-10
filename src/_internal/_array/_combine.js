import forEach from './_forEach';
import isArrayLike from '../../isArrayLike';
import append from './_append';

export default function (first, args) {
  let i = first.length;

  forEach(args, (arg) => {
    if (isArrayLike(arg)) {
      forEach(arg, (elem) => {
        first[i++] = elem;
      });
    } else {
      append(first, arg);
      i++;
    }
  });

  return i;
}
