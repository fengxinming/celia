import isUndefined from '../isUndefined';
import isObject from '../isObject';
import forIn from '../forIn';
import expandoStore from '../_internal/_dom/_expandoStore';
import checkDom from '../_internal/_dom/_checkDom';

/**
 * 缓存数据
 * @param {Node|NodeList} dom
 * @param {String} key
 * @param {*} val
 */
export default function (dom, key, value) {
  checkDom(dom, (element) => {
    let data = expandoStore(element, 'data');
    const isSetter = !isUndefined(value);
    const keyDefined = !isSetter && !isUndefined(key);
    const isSimpleGetter = keyDefined && !isObject(key);

    if (!data && !isSimpleGetter) {
      expandoStore(element, 'data', data = {});
    }

    if (isSetter) {
      data[key] = value;
    } else {
      if (keyDefined) {
        if (isSimpleGetter) {
          return data && data[key];
        } else {
          forIn(key, (n, k) => {
            data[k] = n;
          });
        }
      } else {
        return data;
      }
    }
  });
  return dom;
}
