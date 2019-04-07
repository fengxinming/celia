import support from '../../src/_internal/_dom/_support';
import addClass2 from '../../src/_internal/_dom/_addClass.legacy';
import removeClass2 from '../../src/_internal/_dom/_removeClass.legacy';
import firstElementChild2 from '../../src/_internal/_dom/_firstElementChild.legacy';
import prepend2 from '../../src/_internal/_dom/_prepend.legacy';
import before2 from '../../src/_internal/_dom/_before.legacy';
import after2 from '../../src/_internal/_dom/_after.legacy';

let {
  addClass,
  removeClass,
  firstElementChild,
  prepend,
  before,
  after
} = support;

export function addClassLegacy(bool) {
  support.addClass = bool === false ? addClass : addClass2;
}

export function removeClassLegacy(bool) {
  support.removeClass = bool === false ? removeClass : removeClass2;
}

export function firstElementChildLegacy(bool) {
  support.firstElementChild = bool === false ? firstElementChild : firstElementChild2;
}

export function prependLegacy(bool) {
  support.prepend = bool === false ? prepend : prepend2;
}

export function beforeLegacy(bool) {
  support.before = bool === false ? before : before2;
}

export function afterLegacy(bool) {
  support.after = bool === false ? after : after2;
}
