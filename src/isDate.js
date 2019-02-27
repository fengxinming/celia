import toString from './_internal/_toString';

export default function (value) {
  return toString(value) === '[object Date]';
};
