export default function (dom, classes) {
  classes.forEach((cls) => {
    dom.classList.remove(cls);
  });
}
