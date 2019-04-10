import { checkProto } from './_defineProto';

const objectProto = Object.prototype;

export default function (name, val) {
  name = checkProto(objectProto, name);
  objectProto[name] = val;
};
