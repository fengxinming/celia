import domManip from '../_internal/_dom/_domManip';

/**
 * 向node节点添加新元素
 * @param {Node|Node} dom
 * @param  {...any} args
 */
export default function (dom, ...args) {
  return domManip(dom, args, 'prepend', (elem, node) => {
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      elem.insertBefore(node, elem.firstChild);
    }
  });
}
