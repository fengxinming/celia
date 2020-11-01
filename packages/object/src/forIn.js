import isNil from 'celia.is/isNil';

export default function (object, iterator) {
  if (isNil(object)) {
    return object;
  }

  for (const key in object) {
    if (iterator(object[key], key, object) === false) {
      break;
    };
  }
};
