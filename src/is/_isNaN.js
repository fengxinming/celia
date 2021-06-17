export default function _isNaN(value) {
  // eslint-disable-next-line no-self-compare
  return value !== value && typeof value === 'number';
}
