// import toString from '../toString';

export default function (value) {
  // return toString(value) === '[object RegExp]';
  return value instanceof RegExp;
};
