import classesToArray from '../_internal/_dom/_classesToArray';
import checkDom from '../_internal/_dom/_checkDom';
import prop from './prop';
import support from '../_internal/_dom/_support';

/**
 * 移除className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  if (arguments.length === 1) {
    return prop(dom, 'className', '');
  }
  const classes = classesToArray(value);
  // 方便做单元测试
  const { removeClass } = support;
  checkDom(dom, (elem) => {
    removeClass(elem, classes);
  });
  return dom;
};
