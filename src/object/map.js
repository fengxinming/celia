import each from './forOwn';
import map from '../_internal/_map';

export default function (elems, callback, context) {
  return map(each, elems, callback, context);
}