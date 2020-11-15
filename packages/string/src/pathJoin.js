import isNil from 'celia.is/isNil';
import iterate from 'celia.array/_forEach';

export default function (basePath) {
  const len = arguments.length;
  if (!len || isNil(basePath)) {
    return '.';
  }

  let str = '';

  // eslint-disable-next-line prefer-rest-params
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
