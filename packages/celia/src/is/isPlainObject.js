import toString from '../toString';
import isNil from './isNil';

export default function (value) {
  return !isNil(value) && toString(value) === '[object Object]';
}
