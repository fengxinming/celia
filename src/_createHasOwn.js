const { hasOwnProperty } = Object.prototype;

function checkOwnProperty(object, key) {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(key);
}

function checkOwnProperty2(object, key) {
  return hasOwnProperty.call(object, key);
}

export default function createHasOwn(object) {
  return object.hasOwnProperty ? checkOwnProperty : checkOwnProperty2;
}
