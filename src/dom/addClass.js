import classesToArray from '../_internal/_dom/_classesToArray';
import support from '../_internal/_dom/_support';
import checkDom from '../_internal/_dom/_checkDom';
/**
 * 追加className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  const classes = classesToArray(value);
  // 方便做单元测试
  const { addClass } = support;
  checkDom(dom, (elem) => {
    addClass(elem, classes);
  });
  return dom;
};
