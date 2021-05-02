const { max, min } = Math;

export default function transIndex(fromIndex, length) {
  return fromIndex
    ? fromIndex < 0
      ? max(0, length + fromIndex)
      : min(fromIndex, length - 1)
    : 0;
}
