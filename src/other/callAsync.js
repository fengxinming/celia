export default function callAsync(fn) {
  return Promise.resolve().then(fn);
}
