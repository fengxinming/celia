export default function (first, second) {
  let len = +second.length;
  let i = first.length;

  for (let j = 0; j < len; j++) {
    first[i++] = second[j];
  }

  // 如果first是arrayLike, 那就需要手动更新长度
  first.length = i;

  return first;
}
