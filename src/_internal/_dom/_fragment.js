import {
  singleTagRE,
  fragmentRE
} from './_domRegex';
import forOwn from '../../object/forOwn';
import childNodes from './_childNodes';
import { testEl } from './_domConsts';

export default function (html, props, fn) {
  let matches = html.match(singleTagRE);
  if (matches) {
    const dom = document.createElement(matches[1]);
    forOwn(props, (prop, key) => {
      dom.setAttribute(key, prop);
    });
    fn(dom);
  } else if (fragmentRE.test(html)) {
    testEl.innerHTML = html;
    childNodes(testEl, fn);
  } else {
    fn(document.createTextNode(html));
  }
}
