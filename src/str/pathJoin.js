import loop from '../_loop';
import isNil from '../is/isNil';

export default function (basePath) {
  const len = arguments.length;
  if (!len || isNil(basePath)) {
    return '.';
  }

  let str = '';
  // eslint-disable-next-line prefer-rest-params
  const args = arguments;
  loop(args, 1, len, (arg) => {
    arg = args[arg];
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
