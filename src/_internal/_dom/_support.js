import addClass2 from './_addClass.legacy';
import removeClass2 from './_removeClass.legacy';
import firstElementChild2 from './_firstElementChild.legacy';
import prepend from './_prepend.legacy';
import after from './_after.legacy';
import before from './_before.legacy';

function addClass(dom, classes) {
  classes.forEach((cls) => {
    dom.classList.add(cls);
  });
}

function removeClass(dom, classes) {
  classes.forEach((cls) => {
    dom.classList.remove(cls);
  });
}

function append(elem, fragment) {
  elem.appendChild(fragment);
}

function firstElementChild(elem) {
  return elem.firstElementChild;
}

const { body } = document;
const classListSupported = 'classList' in body;
const firstElementChildSupported = 'firstElementChild' in body;

const support = {
  addClass,
  removeClass,
  append,
  prepend,
  after,
  before,
  firstElementChild: firstElementChildSupported ? firstElementChild : firstElementChild2
};

['prepend', 'after', 'before'].forEach((fn) => {
  if (fn in body) {
    support[fn] = (elem, val) => elem[fn](val);
  }
});

if (!classListSupported) {
  support.addClass = addClass2;
  support.removeClass = removeClass2;
}

export default support;
