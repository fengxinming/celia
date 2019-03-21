import forSlice from '../_internal/_forSlice';
import isNil from '../isNil';

export default function (baseURL) {
  const args = arguments;
  const len = args.length;
  if (!isNil(baseURL)) {
    baseURL = baseURL.replace(/\/+$/, '');
  } else if (len > 1) {
    baseURL = '';
  }
  let str = '';
  forSlice(args, 1, len, (arg) => {
    str += '/';
    str += arg || '';
  });
  if (str) {
    baseURL += str.replace(/\/+/g, '/');
  }
  return baseURL;
}
