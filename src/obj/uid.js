const UID_PROPERTY = `__CUID__${Math.random().toString(36).slice(2)}`;
let uidCounter = 0;

export default function (obj) {
  let uid = obj[UID_PROPERTY];
  if (!uid) {
    uid = ++uidCounter;
    Object.defineProperty(obj, UID_PROPERTY, {
      configurable: true,
      value: uidCounter
    });
  }
  return uid;
}
