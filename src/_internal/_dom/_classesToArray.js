import { rnothtmlwhiteRE } from './_domRegex';
import isString from '../../isString';

export default function (value) {
  if (Array.isArray(value)) {
    return value;
  } else if (isString(value)) {
    return value.match(rnothtmlwhiteRE) || [];
  }
  return [];
}
