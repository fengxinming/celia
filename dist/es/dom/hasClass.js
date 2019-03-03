import classesToArray from '../_internal/_dom/_classesToArray';
import checkDom from '../_internal/_dom/_checkDom';
import forEach from '../_internal/_forEach';

function hasClass(dom, classes) {
  let exists = false;
  let curClasses = classesToArray(dom.className);
  forEach(classes, (cls) => {
    if (curClasses.indexOf(cls) > -1) {
      exists = true;
      return false;
    }
  });
  return exists;
};

/**
 * 判断节点是否包含指定className
 * @param {Node|NodeList} dom
 * @param {String|Array} args
 */
export default function (dom, args) {
  let exists = false;
  checkDom(dom, (elem) => {
    if (hasClass(elem, args)) {
      exists = true;
      return false;
    }
  });
  return exists;
};
