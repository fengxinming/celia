import dir from '../_internal/_dom/_dir';
import sibling from '../_internal/_dom/_sibling';

export default function (dom) {
  return dir(dom, 'previousElementSibling', sibling);
}
