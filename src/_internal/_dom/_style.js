import { vendorPropName } from './_domConsts';
import isNil from '../../isNil';

const cssProps = {};

export default function (elem, origName, value) {
  let style = elem.style;
  origName = cssProps[origName] || (cssProps[origName] = vendorPropName(origName) || origName);
  if (isNil(value)) {
    return style[origName];
  } else {
    style[origName] = value;
  }
}
