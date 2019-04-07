import append from '../_internal/_array/_append';

export default function (arr, obj) {
  if (arr) {
    append(arr, obj);
    return obj;
  }
}
