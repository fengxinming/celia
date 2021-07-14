export default function runQueue(queue, next, cb) {
  const step = (index) => {
    let fn;
    if (index >= queue.length) {
      cb();
    }
    else if ((fn = queue[index])) {
      next(fn, () => {
        step(index + 1);
      });
    }
    else {
      step(index + 1);
    }
  };
  step(0);
}
