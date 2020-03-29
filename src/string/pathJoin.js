import iterate from '../array/_iterate';
import isNil from '../is/isNil';

export default function (basePath) {
  const len = arguments.length;
  if (!len || isNil(basePath)) {
    return '.';
  }

  let str = '';

  iterate(arguments, 1, len, (arg) => {
    if (arg) {
      str += '/';
      str += arg;
    }
  });

  if (str) {
    basePath = basePath.replace(/\/+$/, '') + str.replace(/\/+/g, '/');
  }
  return basePath;
}
