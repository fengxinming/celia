import isNil from './isNil';

export default function (value) {
  return !isNil(value) && typeof value === 'object';
};
