const FALSY = ['false', 'null', 'undefined', '0'];

export default function isFalsy(bool) {
  return !bool || FALSY.indexOf(bool) !== -1;
}
