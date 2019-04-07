import checkDom from './_checkDom';
import append from '../_array/_append';

export default function (dom, method, fn) {
  const arr = [];
  checkDom(dom, (elem) => {
    fn(elem, method, (el) => {
      append(arr, el);
    });
  });
  return arr;
}
