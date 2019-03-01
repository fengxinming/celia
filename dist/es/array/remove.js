import inArray from './inArray';
import removeAt from './removeAt';

export default function (elems, value) {
  let index = inArray(value, elems);
  if (index >= 0) {
    removeAt(elems, index);
    return value;
  }
  // 删除失败返回null
  return null;
}
