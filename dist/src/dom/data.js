import isUndefined from '../isUndefined';
import isObject from '../isObject';
import forIn from '../forIn';
import expandoStore from '../_internal/_expandoStore';

export default function (element, key, value) {
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
}
