import classesToArray from './_classesToArray';

export default function (dom, classes) {
  let curClasses = classesToArray(dom.className);
  let oprClasses = curClasses.slice(0);
  classes.forEach((cls) => {
    const idx = oprClasses.indexOf(cls);
    if (idx > -1) {
      oprClasses.splice(idx, 1);
    }
  });
  curClasses = curClasses.join(' ');
  oprClasses = oprClasses.join(' ');
  if (curClasses !== oprClasses) {
    dom.className = oprClasses;
  }
}
