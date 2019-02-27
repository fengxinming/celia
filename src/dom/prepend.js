import domManip from '../_internal/_domManip';

export default function (nodeList, ...args) {
  return domManip(nodeList, args, 'prepend', (elem, node) => {
    if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
      elem.insertBefore(node, elem.firstChild);
    }
  });
}
