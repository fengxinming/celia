import checkDom from '../_internal/_dom/_checkDom';
import isNil from '../isNil';
import empty from './empty';
import append from './append';

export default function (dom, val) {
  if (!isNil(val)) {
    const callback = val.nodeType === 1 ? function (elem) {
      empty(elem);
      append(elem, val);
    } : function (elem) {
      elem.innerHTML = String(val);
    };
    checkDom(dom, callback);
  }
  return dom;
}
