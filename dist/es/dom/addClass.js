import classesToArray from '../_internal/_dom/_classesToArray';
import { classListSupported } from '../_internal/_dom/_domConsts';
import checkDom from '../_internal/_dom/_checkDom';
import append from '../_internal/_array/_append';

const addClass = classListSupported ? (dom, classes) => {
  classes.forEach((cls) => {
    dom.classList.add(cls);
  });
} : (dom, classes) => {
  let curClasses = classesToArray(dom.className);
  let oprClasses = curClasses.slice(0);
  classes.forEach((cls) => {
    if (oprClasses.indexOf(cls) === -1) {
      append(oprClasses, cls);
    }
  });
  curClasses = curClasses.join(' ');
  oprClasses = oprClasses.join(' ');
  if (curClasses !== oprClasses) {
    dom.className = oprClasses;
  }
};

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
