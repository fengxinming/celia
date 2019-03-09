import forEach from '../forEach';

export default function (first, second) {
  let i = first.length;

  forEach(second, (elem) => {
    first[i++] = elem;
  });

  // 如果first是arrayLike, 那就需要手动更新长度
  first.length = i;

  return first;
}
