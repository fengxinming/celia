import isNil from './isNil';
import get from './_internal/_get';

export default function (object, path, defaultValue) {
  const result = isNil(object) ? undefined : get(object, path);
  return result === undefined ? defaultValue : result;
}
