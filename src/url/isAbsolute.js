export default function (url) {
  return /^([a-z][a-z0-9+\-.]*:)?\/\//i.test(url);
}
