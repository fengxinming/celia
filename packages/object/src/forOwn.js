import isNil from 'celia.is/isNil';

const { hasOwnProperty } = Object.prototype;

function checkOwnProperty(object, key) {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(key);
}

function checkOwnProperty2(object, key) {
  return hasOwnProperty.call(object, key);
}

export default function (object, iterator) {
  if (isNil(object)) {
    return object;
  }

  const hasOwn = object.hasOwnProperty ? checkOwnProperty : checkOwnProperty2;

  for (const key in object) {
    if (hasOwn(object, key) && iterator(object[key], key, object) === false) {
      break;
    }
  }

  return object;
}
