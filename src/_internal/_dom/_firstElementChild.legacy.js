export default function (elem) {
  const firstChild = elem.firstChild;
  return (firstChild && firstChild.nodeType === 1) ? firstChild : null;
}
