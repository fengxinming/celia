export default function (fn, wait) {
  let timeout = null;

  function cancel() {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  function debounce() {
    cancel();
    timeout = setTimeout(fn, wait);
  }

  debounce.cancel = cancel;
  return debounce;
}
