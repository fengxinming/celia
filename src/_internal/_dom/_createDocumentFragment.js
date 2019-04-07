import fragment from './_fragment';
import forEach from '../_array/_forEach';
import isArrayLike from '../../isArrayLike';
import isString from '../../isString';

const isArray = Array.isArray;

export default function (htmlOrArray, props) {
  const frag = document.createDocumentFragment();
  const cb = (content) => {
    // Node
    if (content.nodeType === 1) {
      frag.appendChild(content);
    } else if (!isString(content) && isArrayLike(content)) {
      forEach(content, (elem) => {
        frag.appendChild(elem);
      });
    } else {
      fragment(content, props, (elem) => {
        frag.appendChild(elem);
      });
    }
  };
  if (isArray(htmlOrArray)) {
    forEach(htmlOrArray, cb);
  } else {
    cb(htmlOrArray);
  }
  return frag;
}
