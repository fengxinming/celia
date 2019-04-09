import '../_internal/_dom/_proto/_previousElementSibling';
import dir from '../_internal/_dom/_dir';

export default function (dom, fn) {
  return dir(dom, 'nextElementSibling', fn, true);
}
