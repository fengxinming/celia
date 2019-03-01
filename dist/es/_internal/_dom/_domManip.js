import forEach from '../_forEach';
import isArrayLike from '../../isArrayLike';
import fragment from './_fragment';

function fragmentForList(arr) {
  const frag = document.createDocumentFragment();
  forEach(arr, (content) => {
    // NodeElement
    if (content && content.nodeType === 1) {
      frag.appendChild(content);
    } else if (isArrayLike(content)) {
      forEach(content, (elem) => {
        frag.appendChild(elem);
      });
    } else {
      fragment(String(content), null, (elem) => {
        frag.appendChild(elem);
      });
    }
  });
  return frag;
}

/**
 * 操作dom节点
 * @param {Node|NodeList} list
 * @param {Array} arr 待添加的元素
 * @param {String} method 操作函数
 * @param {Function} fallback 兼容方法
 */
export default function (list, arr, method, fallback) {
  if (list) {
    if (document.body[method]) {
      fallback = (elem, child) => {
        elem[method](child);
      };
    }
    const frag = fragmentForList(arr);
    const len = list.length;
    if (len) {
      for (let i = 0, j = len - 2; i < j; i++) {
        fallback(list[i], frag.cloneNode(true));
      }
      fallback(list[len - 1], frag);
    } else {
      fallback(list, frag);
    }
  }
  return list;
}
