import createHasOwn from './_createHasOwn';

export default function _forOwn(object, iterator) {
  const hasOwn = createHasOwn(object);
  let ret = false;

  for (const key in object) {
    if (hasOwn(object, key)) {
      ret = true;
      if (iterator(object[key], key, object) === false) {
        break;
      }
    }
  }

  return ret;
}
