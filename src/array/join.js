import forEach from '../forEach';

const isArray = Array.isArray;

export default function (first, second) {
  let i = first.length;

  forEach(second, (elem) => {
    first[i++] = elem;
  });

  // 如果first是arrayLike, 那就需要手动更新长度
  if (!isArray(first)) {
    first.length = i;
  }

  return first;
}
