import _forOwn from './_forOwn';

const { isArray } = Array;

/**
 * 浅拷贝对象并排除指定属性
 *
 * @param {object} object
 * @param {Array=} exclude
 * @returns {object}
 */
export default function objectWithoutProperties(object, exclude) {
  const target = {};
  if (object == null) {
    return target;
  }

  const callback = isArray(exclude) && exclude.length
    ? (val, k) => {
      if (exclude.indexOf(k) === -1) {
        target[k] = val;
      }
    }
    : (val, k) => {
      target[k] = val;
    };

  _forOwn(object, callback);
  return target;
}
