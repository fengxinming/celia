import isObject from 'celia.is/isObject';
import isDate from 'celia.is/isDate';
import isRegExp from 'celia.is/isRegExp';

const { isArray } = Array;
const { keys } = Object;
export default function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (isObject(a) && isObject(b)) {
    if (isArray(a) && isArray(b)) { // 判断是否是数组
      return a.length === b.length && a.every((e, i) => {
        return looseEqual(e, b[i]);
      });
    } else if (isDate(a) && isDate(b)) { // 判断日期
      return Number(a) === Number(b);
    } else if (isRegExp(a) && isRegExp(b)) { // 正则
      return a.toString() === b.toString();
    } else { // 对象
      const keysA = keys(a);
      const keysB = keys(b);
      return keysA.length === keysB.length && keysA.every((key) => {
        return looseEqual(a[key], b[key]);
      });
    }
  }
  return false;
}
