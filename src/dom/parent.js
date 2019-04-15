import dir from '../_internal/_dom/_dir';

export default function (dom, fn) {
  return dir(dom, 'parentNode', fn);
}
