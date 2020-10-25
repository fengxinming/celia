import className from './className';

export default function () {
  const classes = [];
  for (let i = 0, len = arguments.length; i < len; i++) {
    const str = className(arguments[i]);
    if (str) {
      classes[classes.length] = str;
    }
  }
  return classes.join(' ');
}
