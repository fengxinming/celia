import forSlice from '../_internal/_array/_forSlice';
import isNil from '../isNil';

export default function (baseURL) {
  const len = arguments.length;
  if (!isNil(baseURL)) {
    baseURL = baseURL.replace(/\/+$/, '');
  } else if (len > 1) {
    baseURL = '';
  }
  let str = '';
  forSlice(arguments, 1, len, (arg) => {
    if (arg) {
      str += '/';
      str += arg;
    }
  });
  if (str) {
    baseURL += str.replace(/\/+/g, '/');
  }
  return baseURL;
}
