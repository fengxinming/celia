import {
  singleTagRE,
  fragmentRE
} from './_domRegex';
import forIn from '../../forIn';
import childNodes from './_childNodes';

const fragDiv = document.createElement('div');

export default function (html, props, fn) {
  let matches = html.match(singleTagRE);
  if (matches) {
    const dom = document.createElement(matches[1]);
    forIn(props, (prop, key) => {
      dom.setAttribute(key, prop);
    });
    fn(dom);
  } else if (fragmentRE.test(html)) {
    fragDiv.innerHTML = html;
    childNodes(fragDiv, fn);
  }
}
