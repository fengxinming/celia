import '../array/append.proto';
import childNodes from '../_internal/_dom/_childNodes';
import checkDom from '../_internal/_dom/_checkDom';
import isFunction from '../isFunction';

export default function (dom, fn) {
  const nodes = [];
  if (!isFunction(fn)) {
    fn = elem => nodes.append(elem);
  }
  checkDom(dom, (elem) => {
    childNodes(elem, fn);
  });
  return nodes;
}
