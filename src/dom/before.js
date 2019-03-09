import domManip from '../_internal/_dom/_domManip';

/**
 * 在node节点之前添加新元素
 * @param {Node|Node} dom
 * @param  {...any} args
 */
export default function (dom, ...args) {
  return domManip(dom, args, 'before', (elem, node) => {
    const parentNode = elem.parentNode;
    if (parentNode) {
      parentNode.insertBefore(node, elem);
    }
  });
}
