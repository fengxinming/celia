import isNil from 'celia.is/isNil';
import get from 'celia.object/_get';

export default function (object, path, defaultValue) {
  const result = isNil(object) ? undefined : get(object, path);
  return result === undefined ? defaultValue : result;
}
