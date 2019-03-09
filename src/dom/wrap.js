import checkDom from '../_internal/_dom/_checkDom';
import fragment from '../_internal/_dom/_fragment';
import { firstElementChildSupported } from '../_internal/_dom/_domConsts';
console.log('firstElementChildSupported', firstElementChildSupported);
const firstElementChild = firstElementChildSupported ? function (elem) {
  return elem.firstElementChild;
} : function (elem) {
  const firstChild = elem.firstChild;
  return (firstChild && firstChild.nodeType === 1) ? firstChild : null;
};

/**
 * 在dom包裹一层
 * @param {Node|NodeList} dom
 * @param {String} html
 */
export default function (dom, html) {
  if (html) {
    fragment(html, null, (elem) => {
      html = elem;
      return false;
    });
    checkDom(dom, (elem, i) => {
      let wrapNode = i ? html.cloneNode(true) : html;
      const pNode = elem.parentNode;
      if (pNode) {
        pNode.replaceChild(wrapNode, dom);
      }
      let el;
      while ((el = firstElementChild(elem))) {
        wrapNode = el;
      }
      wrapNode.appendChild(elem);
    });
  }
  return dom;
}
