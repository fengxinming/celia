import dir from '../_internal/_dom/_dir';
import childNodes from '../_internal/_dom/_childNodes';

export default function (dom) {
  return dir(dom, '', (elem, method, cb) => {
    childNodes(elem, cb);
  });
}
