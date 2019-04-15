import combine from './combine';

export default function (arr, results) {
  const ret = results || [];
  if (arr) {
    combine(ret, arr);
  }
  return ret;
}
