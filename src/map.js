import each from './each';
import map from './_map';

export default function (elems, callback, context) {
  return map(each, elems, callback, context);
}