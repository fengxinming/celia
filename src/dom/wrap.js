import checkDom from '../_internal/_dom/_checkDom';
import fragment from '../_internal/_dom/_fragment';

export default function (proto) {
  proto.wrap = function (content) {
    if (content) {
      fragment(content, null, (elem) => {
        content = elem;
        return false;
      });
      return checkDom((elem, i) => {
        let wrapNode = content;
        if (i) {
          wrapNode = content.cloneNode(true);
        }
        const pNode = elem.parentNode;
        if (pNode) {
          pNode.replaceChild(wrapNode, elem);
        }
        wrapNode.appendChild(elem);
      });
    }
    return this;
  };
}
