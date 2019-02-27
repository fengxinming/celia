import domManip from '../_internal/_domManip';

export default function (nodeList, ...args) {
  return domManip(nodeList, args, 'appendChild');
}
