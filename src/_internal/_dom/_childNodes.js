import forEach from '../_array/_forEach';
import append from '../_array/_append';

export default function (dom, cb) {
  const nodes = [];
  const callback = cb || function (elem) {
    append(nodes, elem);
  };
  forEach(dom.childNodes, (elem, i) => {
    let j = 0;
    if (elem.nodeType === 1) {
      callback(elem, ++j, i);
    }
  });
  return nodes;
}
