import forOwn from 'celia.object/forOwn';
import isArrayLike from 'celia.is/isArrayLike';

function classnames(arg) {
  if (arg) {
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      return arg;
    }
    if (isArrayLike(arg)) {
      return forArray(arg);
    }
    if (typeof arg === 'object') {
      return forObject(arg);
    }
  }
  return '';
}

function forArray(args) {
  const len = args.length;
  if (len > 0) {
    const classes = [];
    for (let i = 0; i < len; i++) {
      const str = classnames(args[i]);
      if (str) {
        classes[classes.length] = str;
      }
    }
    return classes.join(' ');
  }
  return '';
}

function forObject(arg) {
  const classes = [];
  forOwn(arg, (val, key) => {
    if (val) {
      classes[classes.length] = key;
    }
  });
  return classes.join(' ');
}

classnames.concat = function () {
  // eslint-disable-next-line prefer-rest-params
  return forArray(arguments);
};

export default classnames;
