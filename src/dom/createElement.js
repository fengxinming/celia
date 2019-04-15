import createElement from '../_internal/_dom/_createElement';
import isFunction from '../isFunction';
import append from '../_internal/_array/_append';

export default function (html, props, fn) {
  if (isFunction(props)) {
    fn = props;
    props = null;
  }
  if (isFunction(fn)) {
    return createElement(html, props, fn);
  }
  const arr = [];
  createElement(html, props, (el) => {
    append(arr, el);
  });
  return arr;
}
