import toString from './toString';

export default function (value) {
  return toString(value) === '[object AsyncFunction]';
}
