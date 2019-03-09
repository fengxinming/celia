import showHide from '../_internal/_dom/_showHide';

/**
 * 显示元素
 * @param {Node|NodeList} dom
 */
export default function (dom) {
  return showHide(dom, true);
}
