import checkDom from './_checkDom';
import expandoStore from './_expandoStore';
import curCSS from './_curCSS';
import isUndefined from '../../isUndefined';

export default function (dom, show) {
  checkDom(dom, (elem) => {
    const display = elem.style.display || '';
    let originalDisplay = expandoStore(elem, 'display');
    if (isUndefined(originalDisplay)) {
      expandoStore(elem, 'display', display);
      originalDisplay = display;
    }
    if (show) {
      if (!display) {
        const cssDisplay = curCSS(elem, 'display');
        if (cssDisplay === 'none') {
          elem.style.display = 'block';
        }
      } else if (display === 'none') {
        elem.style.display = originalDisplay;
      }
    } else {
      elem.style.display = 'none';
    }
  });
  return dom;
}
