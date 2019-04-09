import '../_internal/_dom/_proto/_classList';
import classesToArray from '../_internal/_dom/_classesToArray';
import checkDom from '../_internal/_dom/_checkDom';
/**
 * 追加className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  const classes = classesToArray(value);
  checkDom(dom, (elem) => {
    elem.classList.add(...classes);
  });
  return dom;
};
