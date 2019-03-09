import { siblingHooker } from './_domConsts';

export default function (dom, prop, fn) {
  // 支持高级特性
  const modern = prop in dom;
  if (modern) {
    while ((dom = dom[prop])) {
      fn(dom);
    }
  } else {
    prop = siblingHooker[prop];
    while ((dom = dom[prop]) && dom.nodeType === 1) {
      fn(dom);
    }
  }
}
