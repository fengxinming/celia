import '../../array/append.proto';
import checkDom from './_checkDom';
import isFunction from '../../isFunction';

export default function (dom, prop, fn, all) {
  const arr = [];
  if (!isFunction(fn)) {
    fn = elem => elem && arr.append(elem);
  }
  const cb = all ? (elem) => {
    let ret;
    while (ret !== false && (elem = elem[prop])) {
      ret = fn(elem);
    }
    return ret;
  } : elem => fn(elem[prop]);
  checkDom(dom, cb);
  return arr;
}
