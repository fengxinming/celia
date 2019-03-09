import { siblingHooker } from './_domConsts';

export default function (dom, method, fn) {
  const nextDom = dom[method];
  if (nextDom) {
    fn(nextDom);
  } else {
    method = siblingHooker[method];
    while ((dom = dom[method]) && dom.nodeType !== 1) { }
    dom && fn(dom);
  }
}
