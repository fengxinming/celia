const { isArray } = Array;
const { keys } = Object;

function className(arg) {
  if (arg) {
    if (isArray(arg)) {
      return arg.length ? classNames(arg) : '';
    } else if (typeof arg === 'object') {
      const classes = [];
      keys(arg).forEach((key) => {
        const val = arg[key];
        if (val) {
          classes[classes.length] = key;
        }
      });
      return classes.join(' ');
    } else if (typeof arg === 'string') {
      return arg.trim();
    } else {
      return arg;
    }
  }
  return '';
}

function classNames(args) {
  const classes = [];
  args.forEach((arg) => {
    const str = className(arg);
    if (str) {
      classes[classes.length] = str;
    }
  });
  return classes.join(' ');
}

export default className;
