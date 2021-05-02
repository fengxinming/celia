import isArrayLike from '../is/isArrayLike';
import transIndex from './transIndex';

export default function valueAt(value, index) {
  if (isArrayLike(value)) {
    return value[transIndex(index, value.length)];
  }
  else if (value != null) {
    return value[index];
  }
  return null;
}
