import isNumber from '../isNumber';
import isUndefined from '../isUndefined';

export default function (first, second) {
  const len = +second.length;
  let j = 0;
  let i = first.length;
  // 处理ArrayLike,例如:NodeLists
  if (isNumber(len)) {
    while (j < len) {
      first[i++] = second[j++];
    }
  } else {
    while (!isUndefined(second[j])) {
      first[i++] = second[j++];
    }
  }
  first.length = i;
  return first;
}
