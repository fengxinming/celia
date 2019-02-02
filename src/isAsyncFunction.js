import { getRawType } from './_internal/func';

export default function (value) {
  return getRawType(value) === '[object AsyncFunction]';
}
