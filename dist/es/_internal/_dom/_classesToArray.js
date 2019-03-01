import rnothtmlwhiteRE from '../_internal/_dom/_domRegex';
import isString from '../../isString';

export default function (value) {
  if (Array.isArray(value)) {
    return value;
  } else if (isString(value)) {
    return value.match(rnothtmlwhiteRE) || [];
  }
  return [];
}
