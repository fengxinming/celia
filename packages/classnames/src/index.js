import forOwn from 'celia.object/forOwn';

const { isArray } = Array;

function classname(arg) {
  if (arg) {
    if (isArray(arg)) {
      return arg.length ? classnames(arg) : '';
    } else if (typeof arg === 'object') {
      const classes = [];
      forOwn(arg, (val, key) => {
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

function classnames(args) {
  const classes = [];
  for (let i = 0, len = args.length; i < len; i++) {
    const arg = args[i];
    const str = classname(arg);
    if (str) {
      classes[classes.length] = str;
    }
  }
  return classes.join(' ');
}

classname.concat = function () {
  return classnames(arguments);
};

export default classname;
