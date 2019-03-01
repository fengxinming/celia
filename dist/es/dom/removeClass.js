import classesToArray from '../_internal/_dom/_classesToArray';
import classListSupported from '../_internal/_dom/_domConsts';
import checkDom from '../_internal/_checkDom';
import prop from './prop';

const removeClass = classListSupported ? (dom, classes) => {
  classes.forEach((cls) => {
    dom.classList.remove(cls);
  });
} : (dom, classes) => {
  let curClasses = classesToArray(dom.className);
  let oprClasses = curClasses.slice(0);
  classes.forEach((cls) => {
    const idx = oprClasses.indexOf(cls);
    if (idx > -1) {
      oprClasses.splice(idx, 1);
    }
  });
  curClasses = curClasses.join(' ');
  oprClasses = oprClasses.join(' ');
  if (curClasses !== oprClasses) {
    dom.className = oprClasses;
  }
};

/**
 * 移除className
 * @param {Node|NodeList} dom
 * @param {String|Array} value
 */
export default function (dom, value) {
  if (!arguments.length) {
    return prop(dom, 'className', '');
  }
  const classes = classesToArray(value);
  checkDom(dom, (elem) => {
    removeClass(elem, classes);
  });
  return dom;
};
