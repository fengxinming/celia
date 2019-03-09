import forEach from '../_forEach';

export function firstNode(dom) {
  return dom && (dom.length > -1 ? dom[0] : dom);
}

export default function (dom, callback) {
  if (dom) {
    if (dom.length > -1) {
      forEach(dom, callback);
    } else {
      callback(dom);
    }
  }
  return dom;
}
