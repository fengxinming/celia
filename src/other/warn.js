import noop from './noop';

export default console.warn
  ? console.warn.bind(console)
  : noop;
