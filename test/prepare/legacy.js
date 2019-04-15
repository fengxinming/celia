import support from '../../src/_internal/_dom/_support';
import prepend2 from '../../src/_internal/_dom/_legacy/_prepend';
import before2 from '../../src/_internal/_dom/_legacy/_before';
import after2 from '../../src/_internal/_dom/_legacy/_after';

let {
  prepend,
  before,
  after
} = support;

export function prependLegacy(bool) {
  support.prepend = bool === false ? prepend : prepend2;
}

export function beforeLegacy(bool) {
  support.before = bool === false ? before : before2;
}

export function afterLegacy(bool) {
  support.after = bool === false ? after : after2;
}
