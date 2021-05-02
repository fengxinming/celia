import _forOwn from '../_forOwn';

/**
 * 遍历object可中途打断
 *
 * @param {object} object
 * @param {function} iterator
 * @returns 是否遍历过
 */
export default function forOwn(object, iterator) {
  if (object == null) {
    return false;
  }

  return _forOwn(object, iterator);
}


forOwn.each = _forOwn;
