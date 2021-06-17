const { toString } = Object.prototype;

export default function isError(err) {
  return toString.call(err).indexOf('Error') > -1;
}
