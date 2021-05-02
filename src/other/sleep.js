export default function (ms) {
  return ms
    ? new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
    : Promise.resolve();
}
