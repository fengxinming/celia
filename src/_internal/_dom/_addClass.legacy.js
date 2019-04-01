import classesToArray from './_classesToArray';
import append from '../_array/_append';

export default function (dom, classes) {
  let curClasses = classesToArray(dom.className);
  let oprClasses = curClasses.slice(0);
  classes.forEach((cls) => {
    if (oprClasses.indexOf(cls) === -1) {
      append(oprClasses, cls);
    }
  });
  curClasses = curClasses.join(' ');
  oprClasses = oprClasses.join(' ');
  if (curClasses !== oprClasses) {
    dom.className = oprClasses;
  }
}
