import checkDom from '../_internal/_dom/_checkDom';
import expandoStore from '../_internal/_dom/_expandoStore';
import forEach from '../_internal/_forEach';

/**
 * 缓存数据
 * @param {Node|NodeList} dom
 * @param  {...String} args
 */
export default function (dom, ...args) {
  const callback = args[0] ? function (element) {
    let data = expandoStore(element, 'data');
    data && forEach(args, (arg) => {
      delete data[arg];
    });
  } : function () {
    expandoStore(dom, 'data', {});
  };
  checkDom(dom, callback);
  return dom;
}
