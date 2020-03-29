// import toString from '../toString';

export default function (value) {
  // return toString(value) === '[object Date]';
  return value instanceof Date;
};
