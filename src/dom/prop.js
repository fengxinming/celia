import isUndefined from '../isUndefined';
import checkDom, { firstNode } from '../_internal/_checkDom';

export function getProperty(dom, k) {
  dom = firstNode(dom);
  return dom && dom[k];
}
export function setProperty(dom, k, v) {
  checkDom(dom, (elem) => {
    elem[k] = v;
  });
  return dom;
}

/**
 * 读取或者设置属性
 * @param {Node|NodeList} dom
 * @param {String} key
 * @param {*} val
 */
export default function (dom, key, val) {
  return isUndefined(val) ?
    getProperty(dom, key) :
    setProperty(dom, key, val);
}
