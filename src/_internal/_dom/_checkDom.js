import forEach from '../_array/_forEach';
import forSlice from '../_array/_forSlice';
import isWindow from '../../isWindow';

export function firstNode(dom) {
  return dom && (dom.length > -1 ? dom[0] : dom);
}

export function manip(dom, mcallback, callback) {
  const len = dom.length;
  let elem, last;
  if (len) {
    forSlice(dom, 0, (last = len - 1), mcallback);
    elem = dom[last];
  } else {
    elem = dom;
  }
  callback(elem);
  return dom;
}

export default function (dom, callback) {
  if (dom) {
    if (dom.length && !isWindow(dom)) {
      forEach(dom, callback);
    } else {
      callback(dom);
    }
  }
  return dom;
}
