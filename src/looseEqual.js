import isObject from './isObject';
import isDate from './isDate';
import isRegExp from './isRegExp';

const { isArray } = Array;
export default function looseEqual(a, b) {
  if (a !== b) {
    if (!a || !b) { // null or undefined
      return false;
    } else if (isArray(a) && isArray(b)) { // 判断是否是数组
      return a.length === b.length && a.every((e, i) => {
        return looseEqual(e, b[i]);
      });
    } else if (isDate(a) && isDate(b)) { // 判断日期
      return +a === +b;
    } else if (isRegExp(a) && isRegExp(b)) { // 正则
      return a.toString() === b.toString();
    } else if (isObject(a) && isObject(b)) { // 对象
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      return keysA.length === keysB.length && keysA.every((key) => {
        return looseEqual(a[key], b[key]);
      });
    } else {
      return String(a) === String(b);
    }
  }

  return true;
}
