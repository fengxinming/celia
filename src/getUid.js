const UID_PROPERTY = 'celia_uid_' + ((Math.random() * 1e9) >>> 0);
let uidCounter = 0;

export default function (obj) {
  return obj[UID_PROPERTY] || Object.defineProperty(obj, UID_PROPERTY, {
    value: ++uidCounter
  });
};
