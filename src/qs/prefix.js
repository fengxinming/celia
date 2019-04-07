export default function (str, prefix) {
  return str ? (prefix || '?') + str : str;
}
