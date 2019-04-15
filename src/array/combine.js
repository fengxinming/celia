import combine from '../_internal/_array/_combine';

const { isArray } = Array;

export default function (first, ...args) {
  if (first) {
    const i = combine(first, args);

    // 如果first是arrayLike, 那就需要手动更新长度
    if (!isArray(first)) {
      first.length = i;
    }
  }

  return first;
}
