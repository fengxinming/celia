import isUndefined from '../isUndefined';
import camelCase from '../camelCase';
import checkDom, { firstNode } from '../_internal/_dom/_checkDom';
import style from '../_internal/_dom/_style';
import curCSS from '../_internal/_dom/_curCSS';

function getter(dom, k) {
  dom = firstNode(dom);
  return dom ? curCSS(dom, k) : '';
}

function setter(dom, k, v) {
  checkDom(dom, (elem) => {
    style(elem, k, v);
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
  key = camelCase(key);
  return isUndefined(val) ?
    getter(dom, key) :
    setter(dom, key, val);
}
