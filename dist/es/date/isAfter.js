import compare from '../_internal/_date/_compare';

export default function (date, input, units) {
  return compare(date, input, units, 'after');
}
