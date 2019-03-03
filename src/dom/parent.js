import dir from '../_internal/_dom/_dir';

export default function (dom) {
  return dir(dom, '', (elem, method, cb) => {
    const parentNode = elem.parentNode;
    if (parentNode) {
      cb(parentNode);
    }
  });
}
