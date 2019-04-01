import classesToArray from '../_internal/_dom/_classesToArray';
import { classListSupported } from '../_internal/_dom/_domConsts';
import checkDom from '../_internal/_dom/_checkDom';
import _removeClass from '../_internal/_dom/_removeClass';
import _removeClass2 from '../_internal/_dom/_removeClass.legacy';
import prop from './prop';

const removeClass = classListSupported ? _removeClass : _removeClass2;

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
  checkDom(dom, (elem) => {
    removeClass(elem, classes);
  });
  return dom;
};
