import forEach from '../_forEach';
import isArrayLike from '../../isArrayLike';
import isString from '../../isString';
import fragment from './_fragment';

function fragmentForList(arr) {
  const frag = document.createDocumentFragment();
  forEach(arr, (content) => {
    // Node
    if (content.nodeType === 1) {
      frag.appendChild(content);
    } else if (!isString(content) && isArrayLike(content)) {
      forEach(content, (elem) => {
        frag.appendChild(elem);
      });
    } else {
      fragment(content, null, (elem) => {
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
    if (method && document.body[method]) {
      fallback = (elem, child) => {
        elem[method](child);
      };
    }
    const frag = fragmentForList(arr);
    const len = list.length;
    if (len) {
      const last = len - 1;
      for (let i = 0, j = last; i < j; i++) {
        fallback(list[i], frag.cloneNode(true));
      }
      fallback(list[last], frag);
    } else {
      fallback(list, frag);
    }
  }
  return list;
}
