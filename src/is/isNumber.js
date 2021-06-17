export default function isNumber(value) {
  // eslint-disable-next-line no-self-compare
  return typeof value === 'number' && value === value;
}
