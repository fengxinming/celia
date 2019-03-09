export default function (iterator, context) {
  return context ? iterator.bind(context) : iterator;
}
