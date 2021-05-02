const { toString } = Object.prototype;

function isObjectLike(value) {
  return !!value && toString.call(value) === '[object Object]';
}

/**
 * 判断是否是一个普通对象，兼容ie9+
 *
 * @param {any} value
 * @returns {boolean}
 */
export default function isPlainObject(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
