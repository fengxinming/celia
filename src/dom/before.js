import domManip from '../_internal/_domManip';

export default function (nodeList, ...args) {
  return domManip(nodeList, args, 'before', (dom, node) => {
    const parentNode = dom.parentNode;
    if (parentNode) {
      parentNode.insertBefore(node, dom);
    }
  });
}