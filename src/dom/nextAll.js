import dir from '../_internal/_dom/_dir';
import siblings from '../_internal/_dom/_siblings';

export default function (dom) {
  return dir(dom, 'nextElementSibling', siblings);
}
