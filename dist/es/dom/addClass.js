import classesToArray from '../_internal/_dom/_classesToArray';
import { classListSupported } from '../_internal/_dom/_domConsts';
import checkDom from '../_internal/_dom/_checkDom';
import _addClass from '../_internal/_dom/_addClass';
import _addClass2 from '../_internal/_dom/_addClass.legacy';

const addClass = classListSupported ? _addClass : _addClass2;

/**
 * 追加className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  const classes = classesToArray(value);
  checkDom(dom, (elem) => {
    addClass(elem, classes);
  });
  return dom;
};
