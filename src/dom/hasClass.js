import '../_internal/_dom/_proto/_classList';
import classesToArray from '../_internal/_dom/_classesToArray';
import checkDom from '../_internal/_dom/_checkDom';
import forEach from '../_internal/_array/_forEach';

/**
 * 判断节点是否包含指定className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  let exists = false;
  const args = classesToArray(value);
  checkDom(dom, (elem) => {
    forEach(args, (arg) => {
      exists = elem.classList.contains(arg);
      return !exists;
    });
    return !exists;
  });
  return exists;
};
