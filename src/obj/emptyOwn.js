import createHasOwn from './_createHasOwn';

const { isArray } = Array;

function del(obj, k) {
  try {
    delete obj[k];
  }
  catch (e) {}
}

/**
 * 清空对象的自身非原型链属性
 *
 * @param {object} obj
 * @param {Array=} exclude
 * @returns {object}
 */
export default function emptyOwn(object, exclude) {
  if (object == null) {
    return object;
  }

  const callback = isArray(exclude) && exclude.length
    ? (k, obj) => {
      if (exclude.indexOf(k) === -1) {
        del(obj, k);
      }
    }
    : (k, obj) => {
      del(obj, k);
    };

  const hasOwn = createHasOwn(object);

  for (const key in object) {
    if (hasOwn(object, key)) {
      callback(key, object);
    }
  }
  return object;
}
