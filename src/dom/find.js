import '../array/append.proto';
import checkDom from '../_internal/_dom/_checkDom';
import isFunction from '../isFunction';
import forEach from '../_internal/_array/_forEach';

export default function (dom, selector, fn) {
  const arr = [];
  if (!isFunction(fn)) {
    fn = elem => arr.append(elem);
  }
  checkDom(dom, elem => forEach(elem.querySelectorAll(selector), fn));
  return arr;
}
