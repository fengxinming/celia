import fragment from '../_internal/_dom/_fragment';
import isFunction from '../isFunction';
import _append from '../_internal/_array/_append';

export default function (html, props, fn) {
  if (isFunction(props)) {
    fn = props;
    props = null;
  }
  if (isFunction(fn)) {
    return fragment(html, props, fn);
  }
  const arr = [];
  fragment(html, props, (el) => {
    _append(arr, el);
  });
  return arr;
}
