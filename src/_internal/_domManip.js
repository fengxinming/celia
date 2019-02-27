import forEach from './_forEach';
import isArrayLike from '../isArrayLike';
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

export default function (list, arr, method, fallback) {
  const frag = fragmentForList(arr);
  if (isArrayLike(list)) {
    const iNoClone = list.length - 1;
    forEach(list, (elem, i) => {
      let node = frag;
      if (i !== iNoClone) {
        node = frag.cloneNode(true);
      }
      elem[method] ? elem[method](node) : fallback(elem, node);
    });
  } else {
    list[method] ? list[method](frag) : fallback(list, frag);
  }
  return list;
}
