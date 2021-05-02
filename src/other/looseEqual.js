import isObject from '../is/isObject';
import isDate from '../is/isDate';
import isRegExp from '../is/isRegExp';

const { isArray } = Array;
const { keys } = Object;
export default function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!isObject(a) || !isObject(b)) {
    return false;
  }

  // 判断是否是数组
  if (isArray(a) && isArray(b)) {
    return a.length === b.length && a.every((e, i) => {
      return looseEqual(e, b[i]);
    });
  }

  // 判断日期
  if (isDate(a) && isDate(b)) {
    return Number(a) === Number(b);
  }

  // 正则
  if (isRegExp(a) && isRegExp(b)) {
    return a.toString() === b.toString();
  }

  // 对象
  const keysA = keys(a);
  const keysB = keys(b);
  return keysA.length === keysB.length && keysA.every((key) => {
    return looseEqual(a[key], b[key]);
  });
}
